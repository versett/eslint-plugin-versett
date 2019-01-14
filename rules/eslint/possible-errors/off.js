"use strict";

module.exports = {
  rules: {
    // Enforce “for” loop update clause moving the counter in the right direction
    "for-direction": 0,
    // disallow using an async function as a Promise executor
    "no-async-promise-executor": 0,
    // disallow comparing against -0
    "no-compare-neg-zero": 0,
    // disallow assignment operators in conditional statements
    "no-cond-assign": 0,
    // disallow the use of console
    "no-console": 0,
    // disallow constant expressions in conditions
    "no-constant-condition": 0,
    // disallow the use of debugger
    "no-debugger": 0,
    // disallow duplicate arguments in function definitions
    "no-dupe-args": 0,
    // disallow duplicate keys in object literals
    "no-dupe-keys": 0,
    // Rule to disallow a duplicate case label
    "no-duplicate-case": 0,
    // disallow empty block statements
    "no-empty": 0,
    // disallow empty character classes in regular expressions
    "no-empty-character-class": 0,
    // disallow reassigning exceptions in catch clauses
    "no-ex-assign": 0,
    // disallow unnecessary boolean casts
    "no-extra-boolean-cast": 0,
    // disallow unnecessary parentheses
    "no-extra-parens": 0,
    // disallow unnecessary semicolons
    "no-extra-semi": 0,
    // disallow reassigning function declarations
    "no-func-assign": 0,
    // disallow variable or function declarations in nested blocks
    "no-inner-declarations": 0,
    // disallow invalid regular expression strings in RegExp constructors
    "no-invalid-regexp": 0,
    // Disallow characters which are made with multiple code points in character class syntax
    "no-misleading-character-class": 0,
    // disallow calling global object properties as functions
    "no-obj-calls": 0,
    // Disallow use of Object.prototypes builtins directly
    "no-prototype-builtins": 0,
    // disallow multiple spaces in regular expression literals
    "no-regex-spaces": 0,
    // disallow sparse arrays
    "no-sparse-arrays": 0,
    // Disallow template literal placeholder syntax in regular strings
    "no-template-curly-in-string": 0,
    // disallow confusing multiline expressions
    "no-unexpected-multiline": 0,
    // disallow unreachable code after return, throw, continue, and break statements
    "no-unreachable": 0,
    // Disallow assignments that can lead to race conditions due to usage of await or yield
    "require-atomic-updates": 0,
    // require calls to isNaN() when checking for NaN
    "use-isnan": 0,
    // enforce comparing typeof expressions against valid strings
    "valid-typeof": 0
  }
};
