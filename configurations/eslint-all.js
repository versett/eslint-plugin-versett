"use strict";

module.exports = {
  extends: [
    require.resolve("../rules/eslint/best-practices/on"),
    require.resolve("../rules/eslint/es6/on"),
    require.resolve("../rules/eslint/node-common/on"),
    require.resolve("../rules/eslint/possible-errors/on"),
    require.resolve("../rules/eslint/strict-mode/on"),
    require.resolve("../rules/eslint/stylistic-issues/on"),
    require.resolve("../rules/eslint/variables/on")
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  env: {
    es6: true
  },
  globals: {},
  rules: {}
};
