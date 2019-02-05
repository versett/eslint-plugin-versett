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
  rules: {
    "jsx-a11y/label-has-for": 0,
    "import/no-duplicates": 2,
    "import/no-named-as-default": 2,
    "import/namespace": 0
  }
};
