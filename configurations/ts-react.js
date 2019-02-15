"use strict";

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  },
  plugins: ["jsx-a11y", "import"],
  // our custome config must have a higher priority to other config, so change the order of extended configs with caution
  extends: [
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    require.resolve("../configurations/eslint-all"),
    require.resolve("../rules/react/on"),
    require.resolve("../rules/jest/on"),
    require.resolve("../rules/ts/on")
  ],
  env: {
    jest: true,
    es6: true
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
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
      }
    },
    react: {
      version: "detect"
    }
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        useJSXTextNode: true,
        project: "./tsconfig.json"
      },
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
        "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
        "react/jsx-uses-vars": "none",
        "react/jsx-fragments": ["disable"],
        "@typescript-eslint/tslint/config": [
          "warn",
          {
            rulesDirectory: ["tslint-plugin-prettier"],
            rules: {
              prettier: [true, { singleQuote: false }]
            }
          }
        ],
        "jsx-a11y/anchor-is-valid": [
          "error",
          {
            components: ["Link"],
            specialLink: ["to"]
          }
        ]
      }
    }
  ]
};
