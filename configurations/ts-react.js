"use strict";

module.exports = {
  parser: "typescript-eslint-parser",
  plugins: ["jsx-a11y", "import"],
  extends: [
    require.resolve("../configurations/eslint-all"),
    require.resolve("../rules/react/on"),
    require.resolve("../rules/jest/on"),
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
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
  rules: {
    "jsx-a11y/label-has-for": 0,
    "import/no-duplicates": 2,
    "import/no-named-as-default": 2,
    "import/namespace": 0
  }
};
