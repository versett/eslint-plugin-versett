"use strict";

module.exports = {
  parser: "typescript-eslint-parser",
  plugins: ["jsx-a11y", "import"],
  //our custome config must have a higher priority to other config, so change the order of extended configs with caution
  extends: [
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    require.resolve("../configurations/eslint-all"),
    require.resolve("../rules/react/on"),
    require.resolve("../rules/jest/on")
  ],
  env: {
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
      files: ["*.spec.js", "*.spec.ts", "*.spec.tsx"],
      rules: {
        "no-magic-numbers": 0
      },
      env: {
        jest: true
      }
    }
  ],
  parserOptions: {
    sourceType: "module"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"]
      }
    }
  },
  rules: {}
};
