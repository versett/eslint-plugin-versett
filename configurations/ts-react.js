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
    jest: true
  },
  ecmaFeatures: {
    jsx: true
  },
  parserOptions: {
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
