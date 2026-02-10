# Armor Tracker Upgrade Plan

## Overview

This plan outlines a careful, incremental approach to upgrading dependencies by **dependency isolation**. Rather than upgrading by category, we prioritize packages that can be upgraded all the way to their latest versions without affecting other packages. This minimizes integration issues and makes rollback simpler.

The strategy:
- **Phase 1-2**: Upgrade completely independent packages (no other packages depend on them)
- **Phase 3-4**: Upgrade build tooling and formatting (affects DX only)
- **Phase 5-6**: Upgrade utility libraries that don't touch core frameworks
- **Phase 7-8**: Upgrade React ecosystem (React, React DOM, then their dependents)
- **Phase 9-10**: Upgrade Next.js and Redux ecosystems (core frameworks)

Each phase is independent and can be completed to the latest stable version before moving to the next phase.

## Current Baseline (Clean State)
- **Node**: ^18.0.0
- **TypeScript**: ~5.0.4 (pinned to 5.0.x)
- **Next.js**: 13.4.12
- **React**: 18.2.0
- **React DOM**: 18.2.0
- **Redux Toolkit**: 1.9.5
- **Redux**: 4.2.1
- **Tailwind CSS**: 3.3.3
- **Radix UI**: v1.x (multiple components)
- **ESLint**: 8.46.0 with TypeScript support 5.62.0

## Upgrade Phases (by Dependency Isolation)

### Phase 1: Completely Independent Utilities (No Dependents)
**Risk Level**: ✅ Very Low

**Rationale**: These packages have zero dependencies from other project packages. They can be upgraded all the way to latest without affecting anything else. Most are simply imported and used directly.

**Packages in this phase**:
- `date-fns`: ^2.30.0 → ^2.latest
- `copy-to-clipboard`: ^3.3.3 → ^3.latest
- `sharp`: ^0.31.3 → ^0.latest
- `type-fest`: ^3.13.1 → ^3.latest
- `lucide-react`: ^0.241.0 → ^0.latest (icon library)
- `clsx`: ^1.2.1 → ^2.latest
- `cmdk`: ^0.2.0 → ^0.latest (command palette)
- `react-circular-progressbar`: ^2.1.0 → ^2.latest
- `@vercel/analytics`: ^1.0.1 → ^1.latest

**Steps**:
1. Update all packages in `package.json` to their latest stable versions
2. Run: `pnpm install`
3. Run: `pnpm typecheck` - should pass
4. Run: `pnpm lint` - should pass
5. Run: `pnpm build` - should pass
6. Manual testing: `pnpm dev` - spot check any visible features using these libs
7. Commit: "upgrade: independent utilities to latest versions"

**Rollback if**: Build fails or runtime errors occur (unlikely for these packages)

---

### Phase 2: State Utilities (Completely Isolated)
**Risk Level**: ✅ Very Low

**Rationale**: These have no dependents in the project and don't depend on core frameworks.

**Packages in this phase**:
- `immer`: ^10.0.2 → ^10.latest
- `use-immer`: ^0.9.0 → ^0.latest

**Steps**:
1. Update versions in `package.json`
2. Run: `pnpm install`
3. Run: `pnpm typecheck` - verify state operations
4. Run: `pnpm lint && pnpm build`
5. Manual testing: `pnpm dev` - test any state mutations
6. Commit: "upgrade: state utilities (immer, use-immer) to latest"

**Rollback if**: Type errors or state mutation issues

---

### Phase 3: Build Tools - TypeScript
**Risk Level**: ✅ Low

**Rationale**: TypeScript is a dev tool. Updating it only affects type checking and compilation, not runtime behavior. We can go to latest 5.x.

**Steps**:
1. Update `package.json`: `typescript: ~5.0.4` → `~5.2.2` (or latest 5.x)
2. Check TypeScript release notes for breaking changes to tsconfig options
3. Run: `pnpm install`
4. Run: `pnpm typecheck` - should pass with no new errors
5. Run: `pnpm lint && pnpm build`
6. Commit: "upgrade: TypeScript to 5.2.x"

**Rollback if**: New type errors that require refactoring

---

### Phase 4: Build Tools - ESLint & Prettier
**Risk Level**: ✅ Low

**Rationale**: These are pure dev tools affecting only code quality checks and formatting.

**Steps**:
1. Update `package.json`:
   - `eslint`: ^8.46.0 → ^8.latest (or 9.x if available)
   - `@typescript-eslint/parser`: ^5.62.0 → ^6.latest
   - `@typescript-eslint/eslint-plugin`: ^5.62.0 → ^6.latest
   - `eslint-config-prettier`: ^8.9.0 → ^9.latest
   - `prettier`: ^2.8.8 → ^3.latest
   - `@ianvs/prettier-plugin-sort-imports`: ^3.7.2 → ^4.latest (if available)
2. Run: `pnpm install`
3. Run: `pnpm lint` - check for new rule violations
4. Run: `pnpm lint:fix` - auto-fix if needed
5. Run: `pnpm format:write` - apply new formatting if needed
6. Run: `pnpm typecheck && pnpm build`
7. Commit: "upgrade: ESLint, Prettier, and TypeScript tooling"

**Rollback if**: Excessive new lint violations or formatting conflicts

---

### Phase 5: Tailwind CSS & Styling Utilities
**Risk Level**: ✅ Low

**Rationale**: Tailwind and its utilities are isolated. No other packages depend on them. Can upgrade all styling utilities together.

**Packages in this phase**:
- `tailwindcss`: ^3.3.3 → ^3.latest (or 4.x if available)
- `tailwindcss-animate`: ^1.0.6 → ^1.latest
- `tailwind-merge`: ^1.14.0 → ^1.latest
- `class-variance-authority`: ^0.6.1 → ^0.7.x (or latest)

**Steps**:
1. Check Tailwind and dependencies release notes for breaking changes
2. Update versions in `package.json`
3. Run: `pnpm install`
4. Run: `pnpm lint` - check for new Tailwind rule violations
5. Run: `pnpm build` - verify CSS generation
6. Visual testing: `pnpm dev` and inspect styling throughout app
7. Commit: "upgrade: Tailwind CSS and styling utilities to latest"

**Rollback if**: CSS generation issues or styling regressions

---

### Phase 6: React Core
**Risk Level**: ⚠️ Medium

**Rationale**: React is the foundation. Must be upgraded before React-dependent packages. We can go to latest 18.x safely.

**Steps**:
1. Check React and React DOM release notes for breaking changes
2. Update `package.json`:
   - `react`: ^18.2.0 → ^18.latest
   - `react-dom`: ^18.2.0 → ^18.latest
3. Run: `pnpm install`
4. Run: `pnpm typecheck` - verify type compatibility
5. Run: `pnpm lint && pnpm build` - full build
6. Manual testing: `pnpm dev`
   - Check browser console for React warnings/errors
   - Verify no hydration mismatches
   - Test all interactive components
7. Commit: "upgrade: React and React DOM to latest 18.x"

**Rollback if**: Hydration errors, type mismatches, or component rendering issues

---

### Phase 7: React Dependents (UI & Utilities)
**Risk Level**: ⚠️ Medium

**Rationale**: These packages depend on React. After React is upgraded, we can upgrade all React-dependent utilities together.

**Packages in this phase**:
- `react-day-picker`: ^8.8.0 → ^8.latest
- `@react-hookz/web`: ^23.1.0 → ^24.latest
- `@tanstack/react-table`: ^8.9.3 → ^8.latest
- All `@radix-ui/*` packages (currently v1.x or v2.x)

**Steps**:
1. Check changelogs for breaking API changes
2. Update all versions in `package.json`
3. Run: `pnpm install`
4. Run: `pnpm typecheck` - check for component API changes
5. Run: `pnpm lint && pnpm build`
6. Thorough manual testing: `pnpm dev`
   - Test every Radix UI component used in the app
   - Test filtering/sorting/table interactions
   - Test date picker if used
   - Verify responsive design
7. Commit: "upgrade: React dependents (Radix UI, react-day-picker, etc) to latest"

**Rollback if**: Type errors, component API changes, or visual regressions

---

### Phase 8: Next.js Core
**Risk Level**: ⚠️ Medium

**Rationale**: Next.js is a core framework. Must be upgraded after React since it depends on React versions.

**Steps**:
1. Check Next.js release notes and migration guide
2. Update `package.json`:
   - `next`: ^13.4.12 → ^13.latest (or jump to 14.x if confident)
3. Run: `pnpm install`
4. Delete `.next`: `rm -rf .next`
5. Run: `pnpm typecheck` - verify build types
6. Run: `pnpm lint` - Next.js may have new lint rules
7. Run: `pnpm build` - full production build
8. Manual testing: `pnpm dev`
   - Test all page routes
   - Check for any deprecation warnings in console
   - Verify API routes work if used
9. Commit: "upgrade: Next.js to latest 13.x"

**Rollback if**: Build failures, routing issues, or runtime errors

---

### Phase 9: Next.js Dependents & Redux
**Risk Level**: ⚠️ Medium

**Rationale**: These depend on Next.js and/or Redux. Upgrade after core frameworks are stable.

**Packages in this phase**:
- `next-redux-wrapper`: ^8.1.0 → ^8.latest
- `next-themes`: ^0.2.1 → ^0.latest
- `@reduxjs/toolkit`: ^1.9.5 → ^1.latest (stay on 1.x for now)
- `redux`: ^4.2.1 → ^4.latest
- `react-redux`: ^8.1.2 → ^8.latest
- `@types/react-redux`: ^7.1.34 → ^7.latest

**Steps**:
1. Check changelogs for breaking changes
2. Update versions in `package.json`
3. Run: `pnpm install`
4. Run: `pnpm typecheck` - watch for state management type changes
5. Run: `pnpm lint && pnpm build`
6. Manual testing: `pnpm dev`
   - Navigate through app to verify all state updates work
   - Check Redux DevTools if available
   - Verify theme switching works (next-themes)
   - Check hydration matches Redux state
7. Commit: "upgrade: Next.js dependents and Redux ecosystem to latest"

**Rollback if**: State management breaks, hydration errors, or type mismatches

---

### Phase 10: Node Version Constraint Review
**Risk Level**: ✅ Low

**Rationale**: After all dependencies are upgraded, check if we can require a newer Node version.

**Steps**:
1. Check minimum Node requirements of all packages (check pnpm-lock.yaml)
2. Consider bumping `engines.node` from ^18.0.0 to ^18.17.0 or ^20.0.0
3. Update `package.json`
4. Run: `pnpm install` and full test on target Node version
5. Commit: "chore: bump minimum Node version requirement"

---

## Dependency Isolation Key

This plan upgrades packages in order of **independence**, not category:

```
Level 1 (Most Independent)
├─ Phase 1: Completely isolated utilities (date-fns, lucide-react, etc)
├─ Phase 2: State utilities (immer, use-immer)
└─ Phase 3-4: Build tools (TypeScript, ESLint, Prettier)

Level 2 (Minor Dependencies)
├─ Phase 5: Tailwind & styling (no cross-deps)
└─ Phase 6: React Core

Level 3 (React Dependents)
├─ Phase 7: Radix UI, react-day-picker, etc
└─ Phase 8: Next.js

Level 4 (Framework Dependents)
└─ Phase 9: Redux, next-redux-wrapper, next-themes

Level 5 (Final Polish)
└─ Phase 10: Node version bump
```

**Benefit**: If a phase breaks, nothing that depends on it in later phases has been upgraded yet. You can fix the issue in isolation or skip just that phase and continue.

---

## Testing Checklist (Per Phase)

Minimum tests for every phase:

- [ ] `pnpm install` succeeds without errors
- [ ] `pnpm typecheck` passes
- [ ] `pnpm lint` passes (auto-fix if needed)
- [ ] `pnpm build` succeeds
- [ ] `pnpm dev` starts and app loads
- [ ] No warnings/errors in browser console
- [ ] Spot check relevant features

For framework phases (6-9), also test:
- [ ] All major user flows work end-to-end
- [ ] No hydration mismatches
- [ ] Responsive design still works

---

## Emergency Rollback

If a phase breaks:

1. Identify what failed: `git diff HEAD~1`
2. Quick fix: Try to fix the issue in place
3. If unfixable: `git reset --hard HEAD~1` to revert just that phase
4. Document: Note the issue in this plan for reference
5. Continue: Proceed to next phase from last stable state

---

## Success Criteria

All 10 phases complete when:

- ✅ Phase 1-10 all pass their testing checklists
- ✅ `pnpm typecheck && pnpm lint && pnpm build` all pass
- ✅ App is fully functional with no runtime errors
- ✅ No deprecation warnings in console or build
- ✅ Each phase is a separate, clean commit

---

## Strategy Notes

- **Sequential, not parallel**: Complete each phase fully before starting the next
- **Commit frequently**: Each phase = one commit, makes rollback easy
- **Test thoroughly**: Manual testing is crucial for UI frameworks
- **Document changes**: Note any code modifications in phase comments
- **Skip if needed**: If a phase is too risky, you can skip it and continue. The dependency isolation means later phases won't break
- **Future upgrades**: After 1.x versions are current, plan separately for 2.x/3.x major versions
- **No version-range changes**: Keep ranges like `^1.9.5` consistent with the upgrade target (e.g., `^1.10.1`)
