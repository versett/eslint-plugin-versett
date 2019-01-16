"use strict";

module.exports = {
  extends: "versett/configurations/es6-react",
  env: {
    mocha: true,
    phantomjs: true,
    jest: true
  },
  rules: {
    "max-nested-callbacks": 0,
    "no-magic-numbers": 0
  }
};
