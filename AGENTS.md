# AGENTS.md

## Commands

- **Dev server**: `pnpm dev`
- **Build**: `pnpm build`
- **Lint**: `pnpm lint --fix`
- **Type check**: `pnpm typecheck`
- **Format**: `pnpm format:write`
- **Task tracking**: `bd ready`, `bd create`, `bd update`, `bd show`, `bd dep add`

## Architecture

- **Framework**: Next.js 13 with TypeScript
- **State**: Redux + Redux Toolkit with localStorage persistence (localStorageMiddleware)
- **UI**: Radix UI components with Tailwind CSS, Lucide icons
- **Structure**: `/src/app` (Next.js pages), `/src/components` (UI + feature components), `/src/store` (Redux slices/selectors), `/src/types`, `/src/config`, `/src/lib`, `/src/data`
- **Domain**: Armor/RPG tracker app with armor sets, items, upgrades, and settings

## Code Style

- **Imports**: Auto-sorted via @ianvs/prettier-plugin-sort-imports (React/Next, third-party, types, internal aliases)
- **Formatting**: 2-space indent, no semicolons, double quotes, trailing commas (es5)
- **Path alias**: `@/*` resolves to `/src`
- **TypeScript**: Strict mode, `strictNullChecks`, `noUncheckedIndexedAccess`
- **Eslint**: Extends next/core-web-vitals, uses unused-imports, tailwindcss linting
- **Naming**: Tailwind's `cn()` utility for class merging; avoid custom Tailwind classes

## Landing the Plane (Session Completion)

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd sync
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**

- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds
