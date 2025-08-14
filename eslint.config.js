import globals from 'globals'
import jestPlugin from 'eslint-plugin-jest'

export default [
  {
    env: {
      browser: true,
      node: true,
    },
    globals: {
      ...globals.browser,
      ...globals.node,
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      quoteProps: ['error', 'as-needed'],
      commaDangle: ['error', 'always-multiline'],
    },
    parserOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
    },
  },
  {
    files: ['**/__tests__/**/*.js'],
    env: {
      jest: true,
      node: true,
    },
    plugins: {
      jest: jestPlugin,
    },
  },
]
