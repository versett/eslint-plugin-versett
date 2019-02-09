"use strict";

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  },
  plugins: ["import"],
  // our custome config must have a higher priority to other config, so change the order of extended configs with caution
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    require.resolve("../configurations/eslint-all"),
    require.resolve("../rules/jest/on"),
    require.resolve("../rules/ts/on")
  ],
  env: {
    jest: true,
    node: true,
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
  overrides: [
    {
      files: ["*.spec.js", "*.spec.ts"],
      rules: {
        "no-magic-numbers": 0
      },
      env: {
        jest: true
      }
    }
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts"]
      }
    }
  }
};
