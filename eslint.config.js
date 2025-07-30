import js from "@eslint/js"
import globals from "globals"
import jest from "eslint-plugin-jest"

export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js, jest },
    languageOptions: {
      globals: {
        ...globals.node, // Для Node.js окружения
        ...globals.jest, // Для Jest
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...jest.configs.recommended.rules,
      "semi": ["error", "never"], // Стиль без точек с запятой
    },
  },
]
