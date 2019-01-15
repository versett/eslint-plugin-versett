"use strict";

module.exports = {
  extends: ["versett/configurations/eslint-all", "versett/rules/jest/on"],
  env: {
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
};
