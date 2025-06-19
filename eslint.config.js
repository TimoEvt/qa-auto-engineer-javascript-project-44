import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      env: {
        node: true,
        browser: true,
        jest: true, // Включаем Jest env для глобальных тестовых функций
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-console': 'off',
      'import/extensions': 'off',
    },
  },
]
