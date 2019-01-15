"use strict";

module.exports = {
  parser: "typescript-eslint-parser",
  plugins: ["import"],
  extends: ["versett/configurations/eslint-all", "versett/rules/jest/on"],
  env: {
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts"]
      }
    }
  },
  rules: {}
};
