# Next.js 14 Migration Checklist

Current version: **Next.js 13.5.11** (Latest 13.x)  
Target version: **Next.js 14+**

## ✅ Completed (Next.js 13 Cleanup)

- [x] Removed deprecated `next/head` import from layout.tsx
- [x] Verified no deprecated Pages Router APIs (getServerSideProps, getStaticProps, getInitialProps)
- [x] Verified no `ImageResponse` imports from `next/server`
- [x] Verified using built-in `next/font` (not `@next/font`)

## 📋 To Do (When upgrading to Next.js 14)

### 1. Viewport Metadata Migration

**Status**: ⏸️ Requires Next.js 14+  
**File**: `src/app/layout.tsx`

Currently `themeColor` is in the metadata export. When upgrading to 14+:

```typescript
// Split themeColor into separate viewport export
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}
```

**Automated codemod**:

```bash
npx @next/codemod@latest metadata-to-viewport-export .
```

### 2. Node.js Version Requirement

**Minimum**: Node.js 18.17 (Currently using Node.js 18.20.8 ✅)

### 3. Breaking Changes in Next.js 14

- ✅ No ImageResponse usage found
- ✅ No @next/font usage (already using next/font)
- ⚠️ If adding OG image routes: Migrate `ImageResponse` from `next/server` to `next/og`

**Codemod for OG images**:

```bash
npx @next/codemod@latest next-og-import .
```

### 4. Other Important Changes

- Server Actions are now stable (not deprecated like in 13)
- Partial Prerendering is in preview
- Enhanced middleware support
- Improved image optimization (AVIF, WebP support)

## Upgrade Steps

When ready to upgrade to Next.js 14:

```bash
# Option 1: Use Next.js codemod to upgrade automatically
npx @next/codemod upgrade 14

# Option 2: Manual upgrade
pnpm add next@14 react@18 react-dom@18

# Then run codemods as needed:
npx @next/codemod@latest metadata-to-viewport-export .
```

## Testing After Upgrade

```bash
pnpm build   # Ensure build passes
pnpm dev     # Test dev server
pnpm lint    # Check linting
pnpm typecheck  # Verify types
```

## Resources

- [Next.js 14 Upgrade Guide](https://nextjs.org/docs/app/guides/upgrading/version-14)
- [Next.js Codemods](https://nextjs.org/docs/app/building-your-application/upgrading/codemods)
- [Next.js 14 Blog Post](https://nextjs.org/blog/next-14)
