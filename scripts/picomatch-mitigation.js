import { createHash } from 'node:crypto';
import { existsSync, readFileSync, realpathSync, writeFileSync } from 'node:fs';
import { isAbsolute, relative, resolve, sep } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const defaultRoot = fileURLToPath(new URL('../', import.meta.url));
const reviewed = {
  "2.3.2": {
    "before": "3a91656f440069aa8f8e15c9d695b9f6b2209df1eab2be8127c72cbcca45ff5f",
    "after": "709749d2147b01f2f467773fc33a65b598944bd6c085c100634148e2513ebd77",
    "integrity": "sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA=="
  },
  "4.0.7": {
    "before": "4e1e05447668aa1e94366c5516a2bcd8f5fff800cc92b1d0cd7d77703b8618c4",
    "after": "9d98e77b4cd2656f5d5af02635948e2fc73dfa6b9aa73214620ad1ecfa54a2d3",
    "integrity": "sha512-qcJu88Q2IWqJsDD529JKMdwGm/dvInW4HvQnRwiH9JtihJvzGOscDtHE3x1pBKeUOTysQ8kVmLnJ2kJu7yhcGA=="
  }
};
const anchor = '  const extglobOpen = (type, value) => {\n';
const guard = "    // Temporary mitigation for GHSA-fc5q-39xc-vjpf. See Docs/DEVELOPMENT_SECURITY.md.\n    if (type === 'plus' || type === 'star') {\n      throw new SyntaxError('Repeated extglobs are disabled by the Tafseer development security mitigation (CVE-2026-112366).');\n    }\n\n";
const digest = (value) => createHash('sha256').update(value).digest('hex');
const fail = (message) => { throw new Error(`Picomatch mitigation: ${message}`); };

// Validate every locked copy before changing any of them. New versions and unknown
// source bytes require review; a marker comment alone is never accepted as proof.
function planMitigation(root, allowOmitted = false) {
  const realRoot = realpathSync(root);
  const lock = JSON.parse(readFileSync(resolve(realRoot, 'package-lock.json'), 'utf8'));
  const copies = Object.entries(lock.packages || {}).filter(([path]) =>
    path === 'node_modules/picomatch' || path.endsWith('/node_modules/picomatch')
  );
  if (!copies.length) fail('no locked copies found; review the dependency tree.');
  const missing = copies.filter(([path]) => !existsSync(resolve(realRoot, path, 'package.json')));
  if (missing.length === copies.length && allowOmitted) return [];
  if (missing.length) fail(`incomplete installation: ${missing.map(([path]) => path).join(', ')}`);
  return copies.map(([path, locked]) => {
    const inside = relative(realRoot, resolve(realRoot, path));
    if (isAbsolute(inside) || inside === '..' || inside.startsWith(`..${sep}`)) fail(`invalid path: ${path}`);
    const parsePath = realpathSync(resolve(realRoot, path, 'lib/parse.js'));
    if (!parsePath.startsWith(`${realRoot}${sep}`)) fail(`parser resolves outside the project: ${path}`);
    const pkg = JSON.parse(readFileSync(resolve(realRoot, path, 'package.json'), 'utf8'));
    const known = reviewed[locked.version];
    if (!known || pkg.name !== 'picomatch' || pkg.version !== locked.version ||
        locked.resolved !== `https://registry.npmjs.org/picomatch/-/picomatch-${locked.version}.tgz` ||
        locked.integrity !== known.integrity) fail(`unreviewed package/version/source: ${path}`);
    const source = readFileSync(parsePath, 'utf8');
    const hash = digest(source);
    if (hash === known.after) return { path, version: pkg.version, parsePath, status: 'mitigated' };
    if (hash !== known.before || source.split(anchor).length !== 2) fail(`unreviewed parser bytes: ${path}`);
    const patched = source.replace(anchor, anchor + guard);
    if (digest(patched) !== known.after) fail(`unexpected patch result: ${path}`);
    return { path, version: pkg.version, parsePath, status: 'original', patched };
  });
}

export function applyPicomatchMitigation(root = defaultRoot) {
  const plan = planMitigation(root, true);
  for (const copy of plan) {
    if (copy.status === 'original') writeFileSync(copy.parsePath, copy.patched, 'utf8');
  }
  // A production-only install has no Picomatch code to mitigate.
  return plan.length ? verifyPicomatchMitigation(root) : [];
}

export function verifyPicomatchMitigation(root = defaultRoot) {
  const plan = planMitigation(root);
  const original = plan.filter((copy) => copy.status !== 'mitigated');
  if (original.length) fail(`guard missing in ${original.map((copy) => copy.path).join(', ')}. Run npm run security:prepare before starting the tools.`);
  return plan.map(({ path, version, parsePath }) => ({ path, version, parsePath }));
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const copies = process.argv.includes('--check')
      ? verifyPicomatchMitigation()
      : applyPicomatchMitigation();
    console.log(`Picomatch mitigation verified: ${copies.length} installed copies. Upstream audit alerts remain open.`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
