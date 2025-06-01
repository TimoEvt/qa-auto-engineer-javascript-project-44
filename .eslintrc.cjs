export default {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  rules: {
    'no-console': 'off',
    'import/extensions': 'off',
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
}
