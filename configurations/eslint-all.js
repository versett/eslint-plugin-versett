"use strict";

module.exports = {
  extends: [
    "versett/rules/eslint/best-practies/on",
    "versett/rules/eslint/es6/on",
    "versett/rules/eslint/node-common/on",
    "versett/rules/eslint/possible-errors/on",
    "versett/rules/eslint/strict-mode/on",
    "versett/rules/eslint/stylistic-issues/on",
    "versett/rules/eslint/variables/on"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  env: {
    es6: true
  },
  globals: {},
  rules: {}
};
