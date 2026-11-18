import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join, relative, resolve, sep } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { applyPicomatchMitigation, verifyPicomatchMitigation } from './picomatch-mitigation.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const require = createRequire(import.meta.url);
const copies = verifyPicomatchMitigation(root);
const lock = JSON.parse(readFileSync(join(root, 'package-lock.json'), 'utf8'));
const temporaryRoot = resolve(process.env.TAFSEER_SECURITY_TEST_TMP || tmpdir());
const blocked = [
  '+(*a)', '+(*)', '*(*)', '*(*a)', '+(a|*a)',
  '@(safe|+(*a))', 'src/**/+(*a).jsx', '!(+(*a))', '+(a)',
];
const options = [{}, { capture: true }, { fastpaths: false }, { windows: true }, { windows: false }, { maxExtglobRecursion: false }, { capture: true, fastpaths: false, windows: true, maxExtglobRecursion: false }];
const controls = [
  ['src/**/*.{js,jsx}', 'src/components/App.jsx', true],
  ['src/**/*.{js,jsx}', 'src/components/App.css', false],
  ['**/*.js', 'src/.hidden.js', false],
  ['**/*.js', 'src/App.js', true],
  ['file?.js', 'file1.js', true],
  ['file[0-9].js', 'filea.js', false],
  ['file[0-9].js', 'file4.js', true],
  ['!**/*.test.js', 'src/App.js', true],
  ['!**/*.test.js', 'src/App.test.js', false],
  ['file.@(js|jsx)', 'file.jsx', true],
  ['file.@(js|jsx)', 'file.css', false],
  ['file?(name).js', 'filename.js', true],
  ['file?(name).js', 'file.js', true],
  ['file\\+\\(a\\).js', 'file+(a).js', true],
];
const isMitigationError = (error) => error instanceof SyntaxError && error.message.includes('CVE-2026-112366');

for (const copy of copies) {
  test(`${copy.path}: all parser entry points reject repeated extglobs`, () => {
    const packagePath = join(root, copy.path);
    const modules = [require(packagePath), require(join(packagePath, 'lib/picomatch.js'))];
    if (existsSync(join(packagePath, 'posix.js'))) modules.push(require(join(packagePath, 'posix.js')));
    const parse = require(join(packagePath, 'lib/parse.js'));
    for (const config of options) {
      for (const pattern of blocked) {
        assert.throws(() => parse(pattern, config), isMitigationError, pattern);
        for (const pm of modules) {
          assert.throws(() => pm(pattern, config), isMitigationError, pattern);
          assert.throws(() => pm.makeRe(pattern, config), isMitigationError, pattern);
          assert.throws(() => pm.parse(pattern, config), isMitigationError, pattern);
          assert.throws(() => pm(['**/*.js', pattern], config), isMitigationError, pattern);
          assert.throws(() => pm('**/*.js', { ...config, ignore: pattern }), isMitigationError, pattern);
        }
      }
    }
  });

  test(`${copy.path}: ordinary globs and non-repeating extglobs retain their behavior`, () => {
    const pm = require(join(root, copy.path));
    for (const [pattern, input, expected] of controls) {
      assert.equal(pm(pattern)(input), expected, `${pattern}: ${input}`);
      assert.equal(pm.makeRe(pattern).test(input), expected, `makeRe ${pattern}: ${input}`);
      assert.equal(pm.compileRe(pm.parse(pattern)).test(input), expected, `parsed state ${pattern}: ${input}`);
    }
    assert.equal(pm('**/*.js', { windows: true })('src\\App.js'), true);
    assert.equal(pm('**/*.js', { dot: true })('src/.hidden.js'), true);
    assert.equal(pm('*.js', { nocase: true })('APP.JS'), true);
    // Extglobs explicitly disabled: the literal-plus form has no repeated group.
    assert.equal(pm.makeRe('+(*a)', { noextglob: true }).test('a'.repeat(48) + '!'), false);
  });

  test(`${copy.path}: reported and alternate attack inputs finish in bounded child processes`, () => {
    for (const [pattern, input] of [
      ['+(*a)', 'a'.repeat(48) + '!'],
      ['+(*)', 'a'.repeat(48) + '/'],
      ['*(*)', 'a'.repeat(48) + '/'],
      ['src/**/+(*a).jsx', 'src/' + 'a'.repeat(48) + '!.jsx'],
    ]) {
      const code = `const pm=require(${JSON.stringify(join(root, copy.path))});try{pm(${JSON.stringify(pattern)}, {maxExtglobRecursion:false})(${JSON.stringify(input)});process.exitCode=2;}catch(e){if(!(e instanceof SyntaxError)||!e.message.includes('CVE-2026-112366'))throw e;}`;
      const result = spawnSync(process.execPath, ['-e', code], { timeout: 10000, windowsHide: true, encoding: 'utf8' });
      assert.ifError(result.error);
      assert.equal(result.status, 0, result.stderr || `Unsafe pattern accepted: ${pattern}`);
    }
  });
}

function fixture(t, paths = [copies[0].path]) {
  const directory = mkdtempSync(join(temporaryRoot, 'tafseer-picomatch-test-'));
  t.after(() => {
    const inside = relative(temporaryRoot, directory);
    assert.ok(inside.startsWith('tafseer-picomatch-test-') && !inside.includes(sep));
    rmSync(directory, { recursive: true, force: true });
  });
  const packages = {};
  for (const path of paths) {
    packages[path] = lock.packages[path];
    mkdirSync(join(directory, path, 'lib'), { recursive: true });
    writeFileSync(join(directory, path, 'package.json'), readFileSync(join(root, path, 'package.json')));
    writeFileSync(join(directory, path, 'lib/parse.js'), readFileSync(join(root, path, 'lib/parse.js')));
  }
  writeFileSync(join(directory, 'package-lock.json'), JSON.stringify({ lockfileVersion: 3, packages }));
  return directory;
}

function restoreOriginal(directory, path) {
  const filename = join(directory, path, 'lib/parse.js');
  const source = readFileSync(filename, 'utf8');
  const start = source.indexOf('    // Temporary mitigation for GHSA-fc5q-39xc-vjpf.');
  const end = source.indexOf('    const token = ', start);
  assert.ok(start > 0 && end > start);
  writeFileSync(filename, source.slice(0, start) + source.slice(end));
}

test('installation recovery reapplies the exact guard and is idempotent', (t) => {
  const directory = fixture(t, copies.map((copy) => copy.path));
  for (const copy of copies) restoreOriginal(directory, copy.path);
  assert.throws(() => verifyPicomatchMitigation(directory), /guard missing/);
  assert.equal(applyPicomatchMitigation(directory).length, copies.length);
  const hashes = () => copies.map((copy) => createHash('sha256').update(readFileSync(join(directory, copy.path, 'lib/parse.js'))).digest('hex'));
  const first = hashes();
  applyPicomatchMitigation(directory);
  assert.deepEqual(hashes(), first);
});

test('unknown parser bytes fail closed before any other copy is modified', (t) => {
  const directory = fixture(t, copies.map((copy) => copy.path));
  restoreOriginal(directory, copies[0].path);
  const first = readFileSync(join(directory, copies[0].path, 'lib/parse.js'), 'utf8');
  const other = join(directory, copies[1].path, 'lib/parse.js');
  writeFileSync(other, readFileSync(other, 'utf8') + '\n// unexpected change\n');
  assert.throws(() => applyPicomatchMitigation(directory), /unreviewed parser bytes/);
  assert.equal(readFileSync(join(directory, copies[0].path, 'lib/parse.js'), 'utf8'), first);
});

test('unknown package versions and incomplete installations fail closed', (t) => {
  const directory = fixture(t);
  const filename = join(directory, 'package-lock.json');
  const changed = JSON.parse(readFileSync(filename, 'utf8'));
  changed.packages[copies[0].path].version = '99.0.0';
  writeFileSync(filename, JSON.stringify(changed));
  assert.throws(() => applyPicomatchMitigation(directory), /unreviewed package\/version\/source/);
  const absent = 'node_modules/absent/node_modules/picomatch';
  changed.packages[absent] = lock.packages[copies[1].path];
  writeFileSync(filename, JSON.stringify(changed));
  assert.throws(() => applyPicomatchMitigation(directory), /incomplete installation/);
});

test('a production-only installation needs no patch but cannot start Vite unchecked', (t) => {
  const directory = fixture(t, []);
  const packages = Object.fromEntries(copies.map((copy) => [copy.path, lock.packages[copy.path]]));
  writeFileSync(join(directory, 'package-lock.json'), JSON.stringify({ lockfileVersion: 3, packages }));
  assert.deepEqual(applyPicomatchMitigation(directory), []);
  assert.throws(() => verifyPicomatchMitigation(directory), /incomplete installation/);
});

test('transitive matcher consumers use the guarded parser', () => {
  assert.throws(() => require('micromatch').makeRe('+(*a)'), isMitigationError);
  assert.throws(() => require('anymatch')('+(*a)'), isMitigationError);
});
