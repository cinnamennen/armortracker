import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  {
    ignores: [
      'dist/**',
      '.cache/**',
      '.next/**',
      '.beads/**',
      'public/**',
      'node_modules/**',
      'next-env.d.ts',
      'src/components/ui/**',
    ],
  },
  js.configs.recommended,
  ...compat.extends(
    'next/core-web-vitals',
    'prettier',
    'plugin:@typescript-eslint/recommended'
  ),
  ...compat.plugins('unused-imports'),
  {
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
      'react/jsx-key': 'off',
      'no-console': 'warn',
      'unused-imports/no-unused-imports': 'error',
    },
  },
]

export default eslintConfig
