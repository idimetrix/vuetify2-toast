module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  "plugins": ["@babel", "@babel/plugin-proposal-class-properties"],
  rules: {
    quotes: ["error", "double"],
  },
};
