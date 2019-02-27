"use strict";

const jsNodeConfig = require("./configurations/js-node");
const jsReactConfig = require("./configurations/js-react");
const jsStandaloneConfig = require("./configurations/js-standalone");
const tsNodeConfig = require("./configurations/ts-node");
const tsReactConfig = require("./configurations/ts-react");

module.exports = {
  configs: {
    jsNode: jsNodeConfig,
    jsReact: jsReactConfig,
    jsStandalone: jsStandaloneConfig,
    tsNode: tsNodeConfig,
    tsReact: tsReactConfig
  }
};
