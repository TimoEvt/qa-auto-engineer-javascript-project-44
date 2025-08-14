import js from '@eslint/js'
import globals from 'globals'
import jest from 'eslint-plugin-jest'

export default [
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js, jest },
    languageOptions: {
      env: {
        node: true,
        jest: true, // чтобы ESLint видел test/expect
      },
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...jest.configs.recommended.rules,
      semi: ['error', 'never'], 
    },
  },
]
  
