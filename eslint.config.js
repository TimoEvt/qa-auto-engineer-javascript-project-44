import globals from 'globals'
import jest from 'eslint-plugin-jest'

export default [
  {
    env: {
      browser: true,
      node: true,
      jest: true, // чтобы ESLint видел test/expect
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
      'comma-dangle': ['error', 'always-multiline'], // чтобы убрать ошибки с trailing comma
    },
    parserOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
    },
  },
]
