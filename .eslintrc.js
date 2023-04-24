module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: "module",
  },
  rules: {
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
  },
};
