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
