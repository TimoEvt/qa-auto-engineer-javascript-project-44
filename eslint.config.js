import js from '@eslint/js'
import jest from 'eslint-plugin-jest'
import globals from 'globals'

export default [
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: ['jest'],
    languageOptions: {
      env: {
        node: true,
      },
      globals: {
        ...globals.node,
        test: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...jest.configs.recommended.rules,
      semi: ['error', 'never'],
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 0 }],
    },
  },
]
