"use strict";

module.exports = {
  plugins: ["react"],
  rules: {
    // enforces consistent naming for boolean props
    // it must start with "is" or "has" like "isEnabled" or "hasCondition"
    "react/boolean-prop-naming": [2, { rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+" }],
    // forbid "button" element without an explicit "type" attribute
    "react/button-has-type": 2,
    // prevent extraneous defaultProps on components
    "react/default-props-match-prop-types": 0,
    // rule enforces consistent usage of destructuring assignment in component
    "react/destructuring-assignment": 0,
    // prevent missing displayName in a React component definition
    "react/display-name": 2,
    // forbid certain props on Components
    "react/forbid-component-props": 2,
    // forbid certain props on DOM Nodes
    "react/forbid-dom-props": 0,
    // forbid certain elements
    "react/forbid-elements": 0,
    // forbid certain propTypes
    "react/forbid-prop-types": 0,
    // forbid foreign propTypes
    "react/forbid-foreign-prop-types": 0,
    // prevent using this.state inside this.setState
    "react/no-access-state-in-setstate": 2,
    // prevent using Array index in key props
    "react/no-array-index-key": 0,
    // prevent passing children as props
    "react/no-children-prop": 2,
    // prevent usage of dangerous JSX properties
    "react/no-danger": 2,
    // prevent problem with children and props.dangerouslySetInnerHTML
    "react/no-danger-with-children": 2,
    // prevent usage of deprecated methods, including component lifecyle methods
    "react/no-deprecated": 0,
    // prevent usage of setState in componentDidMount
    "react/no-did-mount-set-state": 2,
    // prevent usage of setState in componentDidUpdate
    "react/no-did-update-set-state": 0,
    // prevent direct mutation of this.state
    "react/no-direct-mutation-state": 2,
    // prevent usage of findDOMNode
    "react/no-find-dom-node": 2,
    // prevent usage of isMounted
    "react/no-is-mounted": 2,
    // prevent multiple component definition per file
    "react/no-multi-comp": 2,
    // prevent usage of shouldComponentUpdate when extending React.PureComponent
    "react/no-redundant-should-component-update": 2,
    // prevent usage of the return value of React.render
    "react/no-render-return-value": 2,
    // prevent usage of setState
    "react/no-set-state": 0,
    // prevent common casing typos
    "react/no-typos": 2,
    // prevent using string references in ref attribute.
    "react/no-string-refs": 2,
    // prevent using this in stateless functional components
    "react/no-this-in-sfc": 2,
    // prevent invalid characters from appearing in markup
    "react/no-unescaped-entities": 2,
    // prevent usage of unknown DOM property (fixable)
    "react/no-unknown-property": 2,
    // prevent usage of unsafe lifecycle methods
    "react/no-unsafe": 2,
    // prevent definitions of unused prop types
    "react/no-unused-prop-types": 2,
    // prevent definitions of unused state properties
    "react/no-unused-state": 2,
    // prevent usage of setState in componentWillUpdate
    "react/no-will-update-set-state": 2,
    // enforce ES5 or ES6 class for React Components
    "react/prefer-es6-class": 2,
    // enforce stateless React Components to be written as a pure function
    "react/prefer-stateless-function": 0,
    // prevent missing props validation in a React component definition
    "react/prop-types": 0,
    // prevent missing React when using JSX
    "react/react-in-jsx-scope": 0,
    // enforce a defaultProps definition for every prop that is not a required prop
    "react/require-default-props": 0,
    // enforce React components to have a shouldComponentUpdate method
    "react/require-optimization": 0,
    // enforce ES5 or ES6 class for returning value in render function
    "react/require-render-return": 0,
    // prevent extra closing tags for components without children (fixable)
    "react/self-closing-comp": 2,
    // enforce component methods order (fixable)
    "react/sort-comp": 0,
    // enforce propTypes declarations alphabetical sorting
    "react/sort-prop-types": 0,
    // enforce style prop value being an object
    "react/style-prop-object": 0,
    // prevent void DOM elements (e.g. <img />, <br />) from receiving children
    "react/void-dom-elements-no-children": 2,

    /////////// JSX SPECIFIC RULES //////////

    // enforce boolean attributes notation in JSX (fixable)
    "react/jsx-boolean-value": 2,
    // enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
    "react/jsx-child-element-spacing": 0,
    // validate closing bracket location in JSX (fixable)
    "react/jsx-closing-bracket-location": 2,
    // validate closing tag location in JSX (fixable)
    "react/jsx-closing-tag-location": 2,
    // enforce or disallow spaces inside of curly braces in JSX attributes and expressions (fixable)
    "react/jsx-curly-spacing": 0,
    // enforce or disallow spaces around equal signs in JSX attributes (fixable)
    "react/jsx-equals-spacing": 0,
    // restrict file extensions that may contain JSX
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx"] }],
    // enforce position of the first prop in JSX (fixable)
    "react/jsx-first-prop-new-line": 0,
    // enforce event handler naming conventions in JSX
    "react/jsx-handler-names": 0,
    // validate JSX indentation (fixable)
    "react/jsx-indent": 0,
    // validate props indentation in JSX (fixable)
    "react/jsx-indent-props": 0,
    // validate JSX has key prop when in array or iterator
    "react/jsx-key": 2,
    // validate JSX maximum depth
    "react/jsx-max-depth": 0,
    // limit maximum of props on a single line in JSX (fixable)
    "react/jsx-max-props-per-line": 0,
    // prevent usage of .bind() and arrow functions in JSX props
    "react/jsx-no-bind": [2, { allowArrowFunctions: true }],
    // prevent comments from being inserted as text nodes
    "react/jsx-no-comment-textnodes": 2,
    // prevent duplicate props in JSX
    "react/jsx-no-duplicate-props": 2,
    // prevent usage of unwrapped JSX strings
    "react/jsx-no-literals": 0,
    // prevent usage of unsafe target='_blank'
    "react/jsx-no-target-blank": 2,
    // disallow undeclared variables in JSX
    "react/jsx-no-undef": 0,
    // limit to one expression per line in JSX
    "react/jsx-one-expression-per-line": 0,
    // enforce curly braces or disallow unnecessary curly braces in JSX
    "react/jsx-curly-brace-presence": 0,
    // enforce shorthand or standard form for React fragments
    "react/jsx-fragments": [2, "syntax"],
    // enforce PascalCase for user-defined JSX components
    "react/jsx-pascal-case": [2, { allowAllCaps: true }],
    // disallow multiple spaces between inline JSX props (fixable)
    "react/jsx-props-no-multi-spaces": 0,
    // enforce default props alphabetical sorting
    "react/jsx-sort-default-props": 2,
    // enforce props alphabetical sorting (fixable)
    "react/jsx-sort-props": 0,
    // validate spacing before closing bracket in JSX (fixable)
    "react/jsx-space-before-closing": 0,
    // validate whitespace in and around the JSX opening and closing brackets (fixable)
    "react/jsx-tag-spacing": 0,
    // prevent React to be incorrectly marked as unused
    "react/jsx-uses-react": 2,
    // prevent variables used in JSX to be incorrectly marked as unused
    "react/jsx-uses-vars": 2,
    // prevent missing parentheses around multilines JSX (fixable)
    "react/jsx-wrap-multilines": 0
  }
};
