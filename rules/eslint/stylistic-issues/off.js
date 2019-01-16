"use strict";

module.exports = {
  rules: {
    // enforce linebreaks after opening and before closing array brackets
    "array-bracket-newline": 0,
    // enforce consistent spacing inside array brackets
    "array-bracket-spacing": 0,
    // enforce line breaks after each array element
    "array-element-newline": 0,
    // disallow or enforce spaces inside of blocks after opening block and before closing block
    "block-spacing": 0,
    // enforce consistent brace style for blocks
    "brace-style": 0,
    // enforce camelcase naming convention
    "camelcase": 0,
    // enforce or disallow capitalization of the first letter of a comment
    "capitalized-comments": 0,
    // require or disallow trailing commas
    "comma-dangle": 0,
    // enforce consistent spacing before and after commas
    "comma-spacing": 0,
    // enforce consistent comma style
    "comma-style": 0,
    // enforce consistent spacing inside computed property brackets
    "computed-property-spacing": 0,
    // enforce consistent naming when capturing the current execution context
    "consistent-this": 0,
    // require or disallow newline at the end of files
    "eol-last": 0,
    // require or disallow spacing between function identifiers and their invocations
    "func-call-spacing": 0,
    // require function names to match the name of the variable or property to which they are assigned
    "func-name-matching": 0,
    // require or disallow named function expressions
    "func-names": 0,
    // enforce the consistent use of either function declarations or expressions
    "func-style": 0,
    // enforce consistent line breaks inside function parentheses
    "function-paren-newline": 0,
    // disallow specified identifiers
    "id-blacklist": 0,
    // enforce minimum and maximum identifier lengths
    "id-length": 0,
    // require identifiers to match a specified regular expression
    "id-match": 0,
    // enforce the location of arrow function bodies
    "implicit-arrow-linebreak": 0,
    // enforce consistent indentation
    "indent": 0,
    // enforce the consistent use of either double or single quotes in JSX attributes
    "jsx-quotes": 0,
    // enforce consistent spacing between keys and values in object literal properties
    "key-spacing": 0,
    // enforce consistent spacing before and after keywords
    "keyword-spacing": 0,
    // enforce position of line comments
    "line-comment-position": 0,
    // enforce consistent linebreak style
    "linebreak-style": 0,
    // require empty lines around comments
    "lines-around-comment": 0,
    // require or disallow an empty line between class members
    "lines-between-class-members": 0,
    // enforce a maximum depth that blocks can be nested
    "max-depth": 0,
    // enforce a maximum line length
    "max-len": 0,
    // enforce a maximum number of lines per file
    "max-lines": 0,
    // enforce a maximum number of line of code in a function
    "max-lines-per-function": 0,
    // enforce a maximum depth that callbacks can be nested
    "max-nested-callbacks": 0,
    // enforce a maximum number of parameters in function definitions
    "max-params": 0,
    // enforce a maximum number of statements allowed in function blocks
    "max-statements": 0,
    // enforce a maximum number of statements allowed per line
    "max-statements-per-line": 0,
    // enforce a particular style for multiline comments
    "multiline-comment-style": 0,
    // enforce newlines between operands of ternary expressions
    "multiline-ternary": 0,
    // require constructor names to begin with a capital letter
    "new-cap": 0,
    // require parentheses when invoking a constructor with no arguments
    "new-parens": 0,
    // require a newline after each call in a method chain
    "newline-per-chained-call": 0,
    // disallow Array constructors
    "no-array-constructor": 0,
    // disallow bitwise operators
    "no-bitwise": 0,
    // disallow continue statements
    "no-continue": 0,
    // disallow inline comments after code
    "no-inline-comments": 0,
    // disallow if statements as the only statement in else blocks
    "no-lonely-if": 0,
    // disallow mixed binary operators
    "no-mixed-operators": 0,
    // disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": 0,
    // disallow use of chained assignment expressions
    "no-multi-assign": 0,
    // disallow multiple empty lines
    "no-multiple-empty-lines": 0,
    // disallow negated conditions
    "no-negated-condition": 0,
    // disallow nested ternary expressions
    "no-nested-ternary": 0,
    // disallow Object constructors
    "no-new-object": 0,
    // disallow the unary operators ++ and --
    "no-plusplus": 0,
    // disallow specified syntax
    "no-restricted-syntax": 0,
    // disallow all tabs
    "no-tabs": 0,
    // disallow ternary operators
    "no-ternary": 0,
    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": 0,
    // disallow dangling underscores in identifiers
    "no-underscore-dangle": 0,
    // disallow ternary operators when simpler alternatives exist
    "no-unneeded-ternary": 0,
    // disallow whitespace before properties
    "no-whitespace-before-property": 0,
    // enforce the location of single-line statements
    "nonblock-statement-body-position": 0,
    // enforce consistent line breaks inside braces
    "object-curly-newline": 0,
    // enforce consistent spacing inside braces
    "object-curly-spacing": 0,
    // enforce placing object properties on separate lines
    "object-property-newline": 0,
    // enforce variables to be declared either together or separately in functions
    "one-var": 0,
    // require or disallow newlines around variable declarations
    "one-var-declaration-per-line": 0,
    // require or disallow assignment operator shorthand where possible
    "operator-assignment": 0,
    // enforce consistent linebreak style for operators
    "operator-linebreak": 0,
    // require or disallow padding within blocks
    "padded-blocks": 0,
    // require or disallow padding lines between statements
    "padding-line-between-statements": 0,
    // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
    "prefer-object-spread": 0,
    // require quotes around object literal property names
    "quote-props": 0,
    // enforce the consistent use of either backticks, double, or single quotes
    "quotes": 0,
    // require or disallow semicolons instead of ASI
    "semi": 0,
    // enforce consistent spacing before and after semicolons
    "semi-spacing": 0,
    // enforce location of semicolons
    "semi-style": 0,
    // require object keys to be sorted
    "sort-keys": 0,
    // require variables within the same declaration block to be sorted
    "sort-vars": 0,
    // enforce consistent spacing before blocks
    "space-before-blocks": 0,
    // enforce consistent spacing before function definition opening parenthesis
    "space-before-function-paren": 0,
    // enforce consistent spacing inside parentheses
    "space-in-parens": 0,
    // require spacing around infix operators
    "space-infix-ops": 0,
    // enforce consistent spacing before or after unary operators
    "space-unary-ops": 0,
    // enforce consistent spacing after the // or /* in a comment
    "spaced-comment": 0,
    // enforce spacing around colons of switch statements
    "switch-colon-spacing": 0,
    // require or disallow spacing between template tags and their literals
    "template-tag-spacing": 0,
    // require or disallow Unicode byte order mark (BOM)
    "unicode-bom": 0,
    // require parenthesis around regex literals
    "wrap-regex": 0
  }
};
