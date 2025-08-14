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
      quoteProps: ['error', 'as-needed'], // без кавычек вокруг имени свойства
      commaDangle: ['error', 'always-multiline'], // camelCase для @stylistic
    },
    parserOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
    },
  },
  {
    // Override для тестов
    files: ['**/__tests__/**/*.js'],
    env: {
      jest: true,
      node: true,
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      // Можно оставить пустым, ESLint будет знать про jest
    },
  },
]
