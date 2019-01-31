"use strict";

module.exports = {
  parser: "babel-eslint",
  plugins: ["jsx-a11y", "import"],
  extends: [
    require.resolve("../configurations/eslint-all"),
    require.resolve("../rules/react/on"),
    require.resolve("../rules/jest/on"),
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  env: {
    es6: true,
    jest: true
  },
  globals: {
    global: true
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
        extensions: [".js", ".jsx"]
      }
    }
  },
  rules: {}
};
