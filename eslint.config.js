// eslint.config.js
import globals from 'globals'
import jest from 'eslint-plugin-jest'

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        test: 'readonly',
        expect: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
      },
    },
    plugins: {
      jest,
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'quote-props': ['error', 'as-needed'],
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
]
