"use strict";

module.exports = {
  extends: ["versett/rules/ts/on"],
  parser: "typescript-eslint-parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  env: {},
  globals: {},
  rules: {}
};
