import js from '@eslint/js'
import globals from 'globals'

export default [
  js.configs.recommended,

  // Базовые настройки для всех JS-файлов
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
    },
    rules: {
      'no-console': 'off',
      'import/extensions': 'off',
    },
  },

  // Отдельные настройки для тестов
  {
    files: ['**/__tests__/**/*.js', '**/*.test.js', '**/*.spec.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      'no-undef': 'off',
    },
  },
]
