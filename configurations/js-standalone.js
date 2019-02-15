"use strict";

module.exports = {
  parser: "babel-eslint",
  extends: [
    require.resolve("../configurations/eslint-all"),
    require.resolve("../rules/eslint/node-common/off.js"),
    require.resolve("../rules/jest/on")
  ],
  env: {
    es6: true
  },
  globals: {
    global: true,
    process: true,
    setTimeout: true,
    setInterval: true,
    clearTimeout: true,
    clearInterval: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
};
