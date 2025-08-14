import js from '@eslint/js'
import jest from 'eslint-plugin-jest'

export default [
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: ['jest'],
    languageOptions: {
      env: {
        node: true,
        jest: true, // чтобы ESLint видел test/expect
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...jest.configs.recommended.rules,
      semi: ['error', 'never'], // правильно: строка 'never'
    },
  },
]
