import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    extends: [js.configs.recommended],
    languageOptions: {
      globals: {
<<<<<<< HEAD
        console: 'readonly',
        process: 'readonly',
        module: 'readonly',
=======
        ...globals.node,
        ...globals.browser,
        require: "readonly",
        module: "readonly",
        console: "readonly",
>>>>>>> 8935267 (Настроил eslint конфигурацию, исправил ошибки)
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
<<<<<<< HEAD
      ...js.configs.recommended.rules,
      'no-console': 'off',
      'import/extensions': 'off',
    },
  },
];
=======
      "no-console": "off",
    },
  },
]);

>>>>>>> 8935267 (Настроил eslint конфигурацию, исправил ошибки)
