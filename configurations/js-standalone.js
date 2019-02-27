"use strict";

module.exports = {
  parser: "babel-eslint",
  plugins: ["import", "prettier"],
  // our custome config must have a higher priority to other config, so change the order of extended configs with caution
  extends: [
    // 1. Plugins
    "plugin:import/errors",
    "plugin:import/warnings",

    // 2. Our Configurations
    require.resolve("../configurations/eslint-all"),
    require.resolve("../rules/eslint/node-common/off.js"),
    require.resolve("../rules/jest/on"),

    // 3. Disabling Rules That Conflict with Prettier
    "prettier",

    // 4. Enforce Formatting by Prettier
    "plugin:prettier/recommended"
  ],
  env: {
    es6: true,
    jest: true
  },
  globals: {
    global: true,
    process: true,
    document: true,
    window: true,
    setTimeout: true,
    setInterval: true,
    clearTimeout: true,
    clearInterval: true,
    navigator: true
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
