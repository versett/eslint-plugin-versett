"use strict";

module.exports = {
  parser: "babel-eslint",
  plugins: ["jsx-a11y", "import"],
  // our custome config must have a higher priority to other config, so change the order of extended configs with caution
  extends: [
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    require.resolve("../configurations/eslint-all"),
    require.resolve("../rules/react/on"),
    require.resolve("../rules/jest/on")
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
    },
    react: {
      version: "detect"
    }
  },
  overrides: [
    {
      rules: {
        "no-undef": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true }
        ],
        "jest/lowercase-name": [
          "error",
          {
            ignore: ["describe", "test", "it"]
          }
        ],
        "no-unused-vars": [
          "off",
          { vars: "all", args: "after-used", ignoreRestSiblings: false }
        ],
        "react/jsx-filename-extension": [1, { extensions: [".jsx"] }],
        "react/jsx-uses-vars": "none",
        "react/jsx-fragments": ["disable"]
      }
    }
  ]
};
