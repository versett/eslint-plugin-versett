"use strict";

module.exports = {
  parser: "typescript-eslint-parser",
  plugins: ["import"],
  extends: [
    require.resolve("../configurations/eslint-all"),
    require.resolve("../rules/jest/on"),
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  env: {
    jest: true,
    node: true
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
