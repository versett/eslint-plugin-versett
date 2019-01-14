"use strict";

module.exports = {
  extends: [
    "versett/rules/eslint/best-practices/off",
    "versett/rules/eslint/errors/off",
    "versett/rules/eslint/es6/off",
    "versett/rules/eslint/node/off",
    "versett/rules/eslint/strict/off",
    "versett/rules/eslint/style/off",
    "versett/rules/eslint/variables/off"
  ],
  parserOptions: {
    ecmaVersion: 5,
    sourceType: "script",
    ecmaFeatures: {}
  },
  env: {},
  globals: {},
  rules: {}
};
