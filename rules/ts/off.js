"use strict";

const rules = require("./on.js");

Object.keys(rules).map(rule => {
  rules[rule] = 0;
});

module.exports = rules;
