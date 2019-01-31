"use strict";

module.exports = {
  rules: {
    // enforce “for” loop update clause moving the counter in the right direction
    "for-direction": 2,
    // enforce return statements in getters
    "getter-return": [2, { allowImplicit: true }],
    // disallow using an async function as a Promise executor
    "no-async-promise-executor": 0,
    // disallow comparing against -0
    "no-compare-neg-zero": 2,
    // disallow assignment operators in conditional statements
    "no-cond-assign": [2, "always"],
    // disallow the use of console
    "no-console": 2,
    // disallow constant expressions in conditions
    "no-constant-condition": [2, { checkLoops: false }],
    // disallow control characters in regular expressions
    "no-control-regex": 2,
    // disallow the use of debugger
    "no-debugger": 2,
    // disallow duplicate arguments in function definitions
    "no-dupe-args": 2,
    // disallow duplicate keys in object literals
    "no-dupe-keys": 2,
    // rule to disallow a duplicate case label
    "no-duplicate-case": 2,
    // disallow empty block statements
    "no-empty": [2, { allowEmptyCatch: true }],
    // disallow empty character classes in regular expressions
    "no-empty-character-class": 2,
    // disallow reassigning exceptions in catch clauses
    "no-ex-assign": 2,
    // disallow unnecessary boolean casts
    "no-extra-boolean-cast": 2,
    // disallow unnecessary parentheses
    "no-extra-parens": 0,
    // disallow unnecessary semicolons
    "no-extra-semi": 1,
    // disallow reassigning function declarations
    "no-func-assign": 2,
    // disallow variable or function declarations in nested blocks
    "no-inner-declarations": 1,
    // disallow invalid regular expression strings in RegExp constructors
    "no-invalid-regexp": 2,
    // disallow irregular whitespace
    "no-irregular-whitespace": 1,
    // disallow characters which are made with multiple code points in character class syntax
    "no-misleading-character-class": 0,
    // disallow calling global object properties as functions
    "no-obj-calls": 2,
    // disallow use of Object.prototypes builtins directly
    "no-prototype-builtins": 0,
    // disallow multiple spaces in regular expression literals
    "no-regex-spaces": 2,
    // disallow sparse arrays
    "no-sparse-arrays": 2,
    // disallow template literal placeholder syntax in regular strings
    "no-template-curly-in-string": 1,
    // disallow confusing multiline expressions
    "no-unexpected-multiline": 2,
    // disallow unreachable code after return, throw, continue, and break statements
    "no-unreachable": 2,
    // disallow control flow statements in finally blocks
    "no-unsafe-finally": 2,
    // disallow negating the left operand of relational operators
    "no-unsafe-negation": 0,
    // disallow assignments that can lead to race conditions due to usage of await or yield
    "require-atomic-updates": 0,
    // require calls to isNaN() when checking for NaN
    "use-isnan": 1,
    // enforce comparing typeof expressions against valid strings
    "valid-typeof": 2
  }
};
