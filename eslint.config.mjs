import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
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
    'prettier',
    'plugin:@typescript-eslint/recommended'
  ),
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      '@next/next/no-html-link-for-pages': 'off',
      'react/jsx-key': 'off',
      'no-console': 'warn',
    },
  },
  ...compat.plugins('unused-imports'),
  {
    rules: {
      'unused-imports/no-unused-imports': 'error',
    },
  },
]

export default eslintConfig
