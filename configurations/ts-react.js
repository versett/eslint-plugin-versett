"use strict";

module.exports = {
  parser: "babel-eslint",
  plugins: ["jsx-a11y", "import"],
  extends: [
    "versett/configurations/eslint-all",
    "versett/rules/jest/on",
    "versett/rules/react/on",
    "plugin:jsx-a11y/recommended"
  ],
  env: {
    es6: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"]
      }
    }
  },
  rules: {}
};
