import js from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import tsEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import betterTailwindCSS from 'eslint-plugin-better-tailwindcss'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'

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
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint,
    },
    rules: {
      ...tsEslint.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
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
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
    },
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      'better-tailwindcss': betterTailwindCSS,
    },
    rules: {
      ...betterTailwindCSS.configs.recommended.rules,
      'better-tailwindcss/no-unknown-classes': 'warn',
      'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
      'better-tailwindcss/enforce-consistent-class-order': 'off',
    },
  },
  eslintConfigPrettier,
]

export default eslintConfig
