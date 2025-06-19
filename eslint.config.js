import js from '@eslint/js'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.jest,
        require: 'readonly',
        module: 'readonly',
        console: 'readonly',
        process: 'readonly',
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      env: {
        jest: true, 
      },
    },
    rules: {
      'no-console': 'off',
      'import/extensions': 'off',
    },
  },
  {
    files: ['**/__tests__/**/*.js', '**/*.test.js'],
    env: {
      jest: true,
    },
  },
]
