// eslint.config.js
import js from "@eslint/js"
import globals from "globals"
import jest from "eslint-plugin-jest"

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
      semi: ["error", "always"],
      quotes: ["error", "single"],
      "quote-props": ["error", "as-needed"],
    },
    parserOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
    },
  },
]
