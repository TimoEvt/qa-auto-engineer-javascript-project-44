import globals from 'globals'
import jestPlugin from 'eslint-plugin-jest'

export default [
  {
    // Общие настройки для всего проекта
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
      'quote-props': ['error', 'as-needed'],
      'comma-dangle': ['error', 'always-multiline'],
    },
    parserOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
    },
  },
  {
    // Настройки для тестов
    files: ['**/__tests__/**/*.js', '**/__tests__/**/*.cjs', '**/__tests__/**/*.mjs'],
    env: {
      jest: true,
      node: true,
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      // Здесь можно добавлять правила только для тестов
    },
  },
]
