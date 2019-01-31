"use strict";

module.exports = {
  rules: {
    // require braces around arrow function bodies
    "arrow-body-style": 0,
    // require parentheses around arrow function arguments
    "arrow-parens": 0,
    // enforce consistent spacing before and after the arrow in arrow functions
    "arrow-spacing": 0,
    // require super() calls in constructors
    "constructor-super": 2,
    // enforce consistent spacing around * operators in generator functions
    "generator-star-spacing": 0,
    // disallow reassigning class members
    "no-class-assign": 2,
    // disallow arrow functions where they could be confused with comparisons
    "no-confusing-arrow": 0,
    // disallow reassigning const variables
    "no-const-assign": 2,
    // disallow duplicate class members
    "no-dupe-class-members": 2,
    // disallow new operators with the Symbol object
    "no-new-symbol": 2,
    // disallow specified modules when loaded by import
    "no-restricted-imports": 0,
    // disallow this/super before calling super() in constructors
    "no-this-before-super": 2,
    // disallow unnecessary computed property keys in object literals
    "no-useless-computed-key": 0,
    // disallow unnecessary constructors
    "no-useless-constructor": 2,
    // disallow renaming import, export, and destructured assignments to the same name
    "no-useless-rename": 2,
    // require let or const instead of var
    "no-var": 2,
    // require or disallow method and property shorthand syntax for object literals
    "object-shorthand": 2,
    // require using arrow functions for callbacks
    "prefer-arrow-callback": 2,
    // require const declarations for variables that are never reassigned after declared
    "prefer-const": 2,
    // require destructuring from arrays and/or objects
    "prefer-destructuring": 0,
    // disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
    "prefer-numeric-literals": 0,
    // require rest parameters instead of arguments
    "prefer-rest-params": 2,
    // require spread operators instead of .apply()
    "prefer-spread": 2,
    // require template literals instead of string concatenation
    "prefer-template": 2,
    // require generator functions to contain yield
    "require-yield": 2,
    // enforce spacing between rest and spread operators and their expressions
    "rest-spread-spacing": 0,
    // enforce sorted import declarations within modules
    "sort-imports": 0,
    // require symbol descriptions
    "symbol-description": 0,
    // require or disallow spacing around embedded expressions of template strings
    "template-curly-spacing": 0,
    // require or disallow spacing around the * in yield* expressions
    "yield-star-spacing": 0
  }
};
