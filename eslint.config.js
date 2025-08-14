import globals from 'globals'
import jest from 'eslint-plugin-jest'

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
    plugins: {
      jest,
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
    overrides: [
      {
        files: ['**/__tests__/**/*.js'],
        env: {
          jest: true, // только для тестов
        },
      },
    ],
  },
]
