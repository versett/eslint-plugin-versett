"use strict";

module.exports = {
  plugins: ["@typescript-eslint"],
  rules: {
    // Require that member overloads be consecutive
    "@typescript-eslint/adjacent-overload-signatures": 0,
    // Requires using either T[] or Array<T> for arrays
    "@typescript-eslint/array-type": 0,
    // Enforces that types will not to be used
    "@typescript-eslint/ban-types": 0,
    // Enforce camelCase naming conventionغشقد
    "@typescript-eslint/camelcase": 0,
    // Require PascalCased class and interface names
    "@typescript-eslint/class-name-casing": 0,
    // Require explicit return types on functions and class methods
    "@typescript-eslint/explicit-function-return-type": 0,
    // Require explicit accessibility modifiers on class properties and methods
    "@typescript-eslint/explicit-member-accessibility": 0,
    // Enforces naming of generic type variables
    "@typescript-eslint/generic-type-naming": 0,
    // Enforce consistent indentation
    // this is the job for prettier
    "@typescript-eslint/indent": 0,
    // Require that interface names be prefixed with I
    "@typescript-eslint/interface-name-prefix": 0,
    // Require a specific member delimiter style for interfaces and type literals
    // this is the job for prettier
    "@typescript-eslint/member-delimiter-style": 0,
    // Enforces naming conventions for class members by visibility.
    "@typescript-eslint/member-naming": 0,
    // Require a consistent member declaration order
    "@typescript-eslint/member-ordering": 0,
    // Enforces the use of as Type assertions instead of <Type> assertions
    "@typescript-eslint/no-angle-bracket-type-assertion": 0,
    // Disallow generic Array constructors
    "@typescript-eslint/no-array-constructor": 0,
    // Disallow the declaration of empty interfaces
    "@typescript-eslint/no-empty-interface": 0,
    // Disallow usage of the any type
    "@typescript-eslint/no-explicit-any": 0,
    // Forbids the use of classes as namespaces
    "@typescript-eslint/no-extraneous-class": 0,
    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
    "@typescript-eslint/no-inferrable-types": 0,
    // Enforce valid definition of new and constructor
    "@typescript-eslint/no-misused-new": 0,
    // Disallow the use of custom TypeScript modules and namespaces
    "@typescript-eslint/no-namespace": 0,
    // Disallows non-null assertions using the ! postfix operator
    "@typescript-eslint/no-non-null-assertion": 0,
    // Forbids an object literal to appear in a type assertion expression
    "@typescript-eslint/no-object-literal-type-assertion": 0,
    // Disallow the use of parameter properties in class constructors
    "@typescript-eslint/no-parameter-properties": 0,
    // Disallow aliasing this
    "@typescript-eslint/no-this-alias": 0,
    // Disallow /// <reference path="" /> comments
    "@typescript-eslint/no-triple-slash-reference": 0,
    // Disallow the use of type aliases
    "@typescript-eslint/no-type-alias": 0,
    // Warns if a type assertion does not change the type of an expression
    "@typescript-eslint/no-unnecessary-type-assertion": 0,
    // Disallow unused variables
    // this rules is covered by eslint
    "@typescript-eslint/no-unused-vars": 0,
    // Disallow the use of variables before they are defined
    "@typescript-eslint/no-use-before-define": 0,
    // Disallow unnecessary constructors
    "@typescript-eslint/no-useless-constructor": 0,
    // Disallows the use of require statements except in import statements
    "@typescript-eslint/no-var-requires": 0,
    // Prefer an interface declaration over a type literal (type T = { ... })
    "@typescript-eslint/prefer-interface": 0,
    // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules
    "@typescript-eslint/prefer-namespace-keyword": 0,
    // When adding two variables, operands must both be of type number or of type string
    "@typescript-eslint/restrict-plus-operands": 0,
    // Require consistent spacing around type annotations
    // this is the job for prettier
    "@typescript-eslint/type-annotation-spacing": 0
  }
};
