# Temporary development dependency security mitigation

Last verified: 18 November 2026. Branch: `beta-version`.

## Status and scope

The remaining 12 `npm audit` findings share **GHSA-fc5q-39xc-vjpf / CVE-2026-112366**. They propagate from Picomatch into Vite, Tailwind, Sass/Parcel's watcher, and their file-scanning helpers. The registry versions in this checkout are Picomatch **2.3.2** (three copies) and **4.0.7** (one copy).

No patched npm version was published at verification. The advisory is disputed upstream, but it remains active. The project does not suppress, dismiss, or relabel these alerts. This is a **temporary local mitigation**, not an official upstream fix or a risk-acceptance decision.

Sources:

- [GitHub advisory](https://github.com/advisories/GHSA-fc5q-39xc-vjpf)
- [Upstream release discussion](https://github.com/micromatch/picomatch/issues/247)
- [Proposed v4 change](https://github.com/micromatch/picomatch/pull/238/files)
- [Proposed v2 change](https://github.com/micromatch/picomatch/pull/246/files)

## What the mitigation changes

`scripts/picomatch-mitigation.js` inserts a small guard at the parser's `extglobOpen` boundary in every lockfile-listed Picomatch copy. It rejects `+(...)` and `*(...)` with an explicit `SyntaxError`, including nested uses, before a repeated regular-expression group can be constructed. This also covers `makeRe`, public/deep parser imports, and regex strings subsequently passed to Parcel's native watcher.

This intentionally rejects **all repeated extglobs**, including harmless examples such as `+(a)`. Do not introduce that syntax into development-tool configuration while the mitigation is active. Ordinary `*`, `**`, braces, character classes, negation, and non-repeating `@(...)` / `?(...)` matching remain available. The existing project content patterns use ordinary wildcards and braces.

The guard cannot be disabled with Picomatch's `maxExtglobRecursion: false` option. It does not claim to make arbitrary regular-expression sources or caller-forged parser-state objects safe. Keep raw regex/state inputs and build configuration trusted; do not expose glob compilation as a service for untrusted input.

The script checks the locked registry source, archive integrity metadata, installed name/version, and exact original/mitigated SHA-256 parser hashes. It checks all copies before writing. Unknown bytes, versions, partial installations, or parser files resolving outside the checkout fail closed and require review. A fully production-only install has no copies to modify.

## Installation and use

Normal `npm install` and `npm ci` run the guard through `postinstall`. Standard `npm run dev`, `npm run build`, and `npm run preview` also prepare it through their lifecycle hooks. `vite.config.js` independently verifies its presence, so direct Vite invocation after an installation with scripts disabled fails before the server/build is started.

```sh
npm ci
npm run security:check
npm run test:security
npm run lint
npm run build
npm run dev
```

If install scripts were disabled, run `npm run security:prepare` before invoking the tools. `security:prepare` is idempotent. After changing dependency files, re-run preparation and checks. **Restart any already-running Node/Vite process** after applying a patch: loaded parser modules remain cached in that process.

The dev server should remain bound to loopback for local review. Exposing it to a network needs a separate review. Commands that deliberately bypass the project Vite configuration, execute another checkout/global package tree, or run dependency code outside these guarded launch paths are outside this mitigation. Installations with an incomplete development dependency tree are rejected rather than silently accepted.

## Validation and maintenance

The regression suite checks all four copies through normal, POSIX and deep parser entry points, arrays and ignore patterns, multiple parser options (including the normal safeguard opt-out), time-limited attack reproductions, ordinary matching controls, restoration after reinstallation, idempotence, and rejection of unknown/partial trees.

Keep the original registry versions and alerts visible. `npm audit` is expected to continue reporting the 12 development findings because it cannot recognize this local guard. `npm audit --omit=dev` remains the separate production-dependency check. A clean scanner result must not be inferred from this mitigation.

Recheck the upstream advisory and npm release status whenever dependencies change and before relying on a new deployment workflow. When official patched releases exist, review and upgrade each parent/version line, remove the local guard and lifecycle/config checks, and rerun security, lint, build, watch, and browser checks. If new source hashes are rejected, review the new packages; do not simply add new hash values to bypass the check.

## Verification results — 18 November 2026

- Before mitigation, `+(*a)`, `+(*)`, and `*(*)` exceeded the isolated 1.5-second execution limit in both installed version lines. Ordinary wildcard/brace controls completed normally.
- All 17 regression tests passed from a fresh installation, including the combined capture/Windows/fast-path/safeguard-opt-out case. The child-process limit includes startup time and still requires an explicit security rejection; matching an attack string successfully does not count as a pass.
- A fresh `npm ci` automatically applied and verified all four copies through `postinstall`. An initial offline-only attempt lacked cached dependencies; the subsequent normal installation completed successfully.
- Actual direct Vite startup in the disposable install exited with status 1 when a reviewed original parser was restored, identifying the missing guard. Restoring/preparing the mitigation passed verification again.
- The guarded production build passed. All 68 output files have the same SHA-256 hashes as the pre-mitigation baseline.
- All nine application routes loaded without browser warnings or errors. A temporary source probe confirmed Tailwind new-file detection and hot module reload; the probe was removed.
- The development server was restarted to discard cached original parser code and remains on `127.0.0.1:5173`.
- Independent read-only review found no blocking issue within the documented scope.

No code was committed or pushed. Previous dependency and lint fixes were preserved.

Final local checks: `npm run lint` passed with zero errors/warnings; `npm run test:security` passed all 17 tests; `npm run security:check` verified all four copies. The final audit still reports only the 12 development findings for GHSA-fc5q-39xc-vjpf; `npm audit --omit=dev` reports zero.

Inventory trace for this mitigation (working tree, not a deployed fix):

- Checkout HEAD: `bf04ccc507d435e1957c43e1810371e95f884cab`, branch `beta-version`; prior user-authorized changes remain uncommitted.
- Lockfile: `package-lock.json`; SHA-256 before mitigation: `E58C723219970070032627CC0309583D26B07852546E844694FD921C22093D75`.
- Final lockfile SHA-256: `A883936CAE9446C00B83E009C4F15052B74CACB0288CF7A9A086F91490A959E1`. The lock records the new install lifecycle; Picomatch registry versions remain 2.3.2 and 4.0.7.
