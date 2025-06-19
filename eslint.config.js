import js from '@eslint/js'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      'no-console': 'off',
      'import/extensions': 'off',
    },
  },
  {
    // Специально для тестов — включаем Jest globals
    files: ['__tests__/**/*.js', '**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
]
