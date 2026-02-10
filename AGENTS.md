# AGENTS.md

## Commands
- **Dev server**: `pnpm dev`
- **Build**: `pnpm build`
- **Lint**: `pnpm lint --fix`
- **Type check**: `pnpm typecheck`
- **Format**: `pnpm format:write`

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
