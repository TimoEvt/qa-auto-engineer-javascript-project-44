import js from '@eslint/js'
import globals from 'globals'

export default [
  js.configs.recommended,

  // Общие правила для всех JS-файлов
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        require: 'readonly',
        module: 'readonly',
        console: 'readonly',
        process: 'readonly',
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      env: {
        node: true,
        browser: true,
      },
    },
    rules: {
      'no-console': 'off',
      'import/extensions': 'off',
    },
  },

  {
    files: ['**/__tests__/**/*.js', '**/*.test.js', '**/*.spec.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
      env: {
        jest: true,
      },
    },
    rules: {
      'no-undef': 'off',
    },
  },
]
