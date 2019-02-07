"use strict";

module.exports = {
  rules: {
    // require or disallow initialization in variable declarations
    "init-declarations": 0,
    // disallow deleting variables
    "no-delete-var": 2,
    // disallow labels that share a name with a variable
    "no-label-var": 0,
    // disallow specified global variables
    "no-restricted-globals": 0,
    // disallow variable declarations from shadowing variables declared in the outer scope
    "no-shadow": 0,
    // disallow identifiers from shadowing restricted names
    "no-shadow-restricted-names": 0,
    // disallow the use of undeclared variables unless mentioned in /*global */ comments
    "no-undef": 2,
    // disallow initializing variables to undefined
    "no-undef-init": 0,
    // disallow the use of undefined as an identifier
    "no-undefined": 2,
    // disallow unused variables
    "no-unused-vars": [2, { ignoreRestSiblings: true }],
    // disallow the use of variables before they are defined
    "no-use-before-define": 0
  }
};
