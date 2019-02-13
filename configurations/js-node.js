"use strict";

module.exports = {
  parser: "babel-eslint",
  plugins: ["import", "prettier"],
  // our custome config must have a higher priority to other config, so change the order of extended configs with caution
  extends: [
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    require.resolve("../configurations/eslint-all"),
    require.resolve("../rules/jest/on")
  ],
  env: {
    es6: true,
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
  overrides: [
    {
      files: ["*.spec.js"],
      rules: {
        "no-magic-numbers": 0
      },
      env: {
        jest: true
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js"]
      }
    }
  }
};
