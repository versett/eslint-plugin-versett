"use strict";

const jsNodeConfig = require("./configurations/js-node");
const jsReactConfig = require("./configurations/js-React");
const tsNodeConfig = require("./configurations/ts-node");
const tsReactConfig = require("./configurations/ts-react");

module.exports = {
  configs: {
    jsNode: jsNodeConfig,
    jsReact: jsReactConfig,
    tsNode: tsNodeConfig,
    tsReact: tsReactConfig
  },
  rules: {}
};
