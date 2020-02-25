"use strict";

module.exports = {
  plugins: ["@typescript-eslint"],
  rules: {
    // Require that member overloads be consecutive
    "@typescript-eslint/adjacent-overload-signatures": 2,
    // Requires using either T[] or Array<T> for arrays
    "@typescript-eslint/array-type": [2, { default: "array-simple" }],
    // Enforces that types will not to be used
    "@typescript-eslint/ban-types": [
      2,
      {
        types: {
          Object: "Use {} instead",
          String: {
            message: "Use string instead",
            fixWith: "string"
          }
        }
      }
    ],
    // Enforce camelCase naming convention
    "@typescript-eslint/camelcase": 2,
    // Require PascalCased class and interface names
    "@typescript-eslint/class-name-casing": 2,
    // Enforces the use of as Type assertions instead of <Type> assertions
    // Forbids an object literal to appear in a type assertion expression
    "@typescript-eslint/consistent-type-assertions": [2, {
      assertionStyle: "as",
      objectLiteralTypeAssertions: "never"
    }],
    // Require explicit return types on functions and class methods
    "@typescript-eslint/explicit-function-return-type": 0,
    // Require explicit accessibility modifiers on class properties and methods
    "@typescript-eslint/explicit-member-accessibility": 2,
    // Enforces naming of generic type variables
    "@typescript-eslint/generic-type-naming": [2, "^[A-Z][a-zA-Z0-9]+Type$"],
    // Enforce consistent indentation
    "@typescript-eslint/indent": 0,
    // Require that interface names be prefixed with I
    "@typescript-eslint/interface-name-prefix": [2, "always"],
    // Require a specific member delimiter style for interfaces and type literals
    "@typescript-eslint/member-delimiter-style": 0,
    // Enforces naming conventions for class members by visibility.
    "@typescript-eslint/member-naming": [2, { private: "^_", protected: "^_" }],
    // Require a consistent member declaration order
    "@typescript-eslint/member-ordering": 2,
    // Disallow generic Array constructors
    "@typescript-eslint/no-array-constructor": 2,
    // Disallow the declaration of empty interfaces
    "@typescript-eslint/no-empty-interface": 2,
    // Disallow usage of the any type
    "@typescript-eslint/no-explicit-any": 2,
    // Forbids the use of classes as namespaces
    "@typescript-eslint/no-extraneous-class": 2,
    // Disallow iterating over an array with a for-in loop
    "@typescript-eslint/no-for-in-array": 2,
    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
    "@typescript-eslint/no-inferrable-types": 2,
    // Enforce valid definition of new and constructor
    "@typescript-eslint/no-misused-new": 2,
    // Disallow the use of custom TypeScript modules and namespaces
    "@typescript-eslint/no-namespace": 2,
    // Disallows non-null assertions using the ! postfix operator
    "@typescript-eslint/no-non-null-assertion": 2,
    // Disallow the use of parameter properties in class constructors
    "@typescript-eslint/no-parameter-properties": 2,
    // Disallows invocation of require()
    "@typescript-eslint/no-require-imports": 0,
    // Disallow aliasing this
    "@typescript-eslint/no-this-alias": 2,
    // Disallow /// <reference path="" /> comments
    "@typescript-eslint/triple-slash-reference": [2, {
      path: "never",
      types: "never",
      lib: "never"
    }],
    // Disallow the use of type aliases
    "@typescript-eslint/no-type-alias": 0,
    // Warns if a type assertion does not change the type of an expression
    "@typescript-eslint/no-unnecessary-type-assertion": 2,
    // Disallow unused variables
    // this rules is covered by eslint
    "@typescript-eslint/no-unused-vars": 2,
    // Disallow the use of variables before they are defined
    // this rules is covered by eslint
    "@typescript-eslint/no-use-before-define": 2,
    // Disallow unnecessary constructors
    // this rules is covered by eslint
    "@typescript-eslint/no-useless-constructor": 2,
    // Disallows the use of require statements except in import statements
    "@typescript-eslint/no-var-requires": 2,
    // Prefer an interface declaration over a type literal (type T = { ... })
    "@typescript-eslint/prefer-interface": 0,
    // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
    "@typescript-eslint/prefer-namespace-keyword": 2,
    // Requires any function or method that returns a Promise to be marked async
    "@typescript-eslint/promise-function-async": 0,
    // When adding two variables, operands must both be of type number or of type string
    "@typescript-eslint/restrict-plus-operands": 2,
    // Require consistent spacing around type annotations
    "@typescript-eslint/type-annotation-spacing": 0
  }
};
