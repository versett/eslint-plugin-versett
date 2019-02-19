"use strict";

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  },
  plugins: ["import", "prettier"],
  // our custome config must have a higher priority to other config, so change the order of extended configs with caution
  extends: [
    // 1. Plugins
    "plugin:import/errors",
    "plugin:import/warnings",

    // 2. Our Configurations
    require.resolve("../configurations/eslint-all"),
    require.resolve("../rules/jest/on"),
    require.resolve("../rules/ts/on"),

    // 3. Disabling Rules That Conflict with Prettier
    "prettier",
    "prettier/@typescript-eslint",

    // 4. Enforcing Formatting by Prettier
    "plugin:prettier/recommended"
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
      env: {
        jest: true
      }
    }
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".js"]
      }
    }
  }
};
