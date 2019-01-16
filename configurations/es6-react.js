"use strict";

//TODO: add rules for react on
module.exports = {
  parser: "babel-eslint",
  extends: ["versett/configurations/es6", "versett/rules/react/on"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {
    fetch: false
  },
  rules: {
    "no-extra-parens": 0,
    "no-var": 2
  }
};
