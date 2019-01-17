"use strict";

module.exports = {
  plugins: ["react"],
  rules: {
    // Enforces consistent naming for boolean props
    "react/boolean-prop-naming": 0,
    // Forbid "button" element without an explicit "type" attribute
    "react/button-has-type": 0,
    // Prevent extraneous defaultProps on components
    "react/default-props-match-prop-types": 0,
    // Rule enforces consistent usage of destructuring assignment in component
    "react/destructuring-assignment": 0,
    // Prevent missing displayName in a React component definition
    "react/display-name": 0,
    // Forbid certain props on Components
    "react/forbid-component-props": 0,
    // Forbid certain props on DOM Nodes
    "react/forbid-dom-props": 0,
    // Forbid certain elements
    "react/forbid-elements": 0,
    // Forbid certain propTypes
    "react/forbid-prop-types": 0,
    // Forbid foreign propTypes
    "react/forbid-foreign-prop-types": 0,
    // Prevent using this.state inside this.setState
    "react/no-access-state-in-setstate": 0,
    // Prevent using Array index in key props
    "react/no-array-index-key": 0,
    // Prevent passing children as props
    "react/no-children-prop": 0,
    // Prevent usage of dangerous JSX properties
    "react/no-danger": 0,
    // Prevent problem with children and props.dangerouslySetInnerHTML
    "react/no-danger-with-children": 0,
    // Prevent usage of deprecated methods, including component lifecyle methods
    "react/no-deprecated": 0,
    // Prevent usage of setState in componentDidMount
    "react/no-did-mount-set-state": 0,
    // Prevent usage of setState in componentDidUpdate
    "react/no-did-update-set-state": 0,
    // Prevent direct mutation of this.state
    "react/no-direct-mutation-state": 0,
    // Prevent usage of findDOMNode
    "react/no-find-dom-node": 0,
    // Prevent usage of isMounted
    "react/no-is-mounted": 0,
    // Prevent multiple component definition per file
    "react/no-multi-comp": 0,
    // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    "react/no-redundant-should-component-update": 0,
    // Prevent usage of the return value of React.render
    "react/no-render-return-value": 0,
    // Prevent usage of setState
    "react/no-set-state": 0,
    // Prevent common casing typos
    "react/no-typos": 0,
    // Prevent using string references in ref attribute.
    "react/no-string-refs": 0,
    // Prevent using this in stateless functional components
    "react/no-this-in-sfc": 0,
    // Prevent invalid characters from appearing in markup
    "react/no-unescaped-entities": 0,
    // Prevent usage of unknown DOM property (fixable)
    "react/no-unknown-property": 0,
    // Prevent usage of unsafe lifecycle methods
    "react/no-unsafe": 0,
    // Prevent definitions of unused prop types
    "react/no-unused-prop-types": 0,
    // Prevent definitions of unused state properties
    "react/no-unused-state": 0,
    // Prevent usage of setState in componentWillUpdate
    "react/no-will-update-set-state": 0,
    // Enforce ES5 or ES6 class for React Components
    "react/prefer-es6-class": 0,
    // Enforce stateless React Components to be written as a pure function
    "react/prefer-stateless-function": 0,
    // Prevent missing props validation in a React component definition
    "react/prop-types": 0,
    // Prevent missing React when using JSX
    "react/react-in-jsx-scope": 0,
    // Enforce a defaultProps definition for every prop that is not a required prop
    "react/require-default-props": 0,
    // Enforce React components to have a shouldComponentUpdate method
    "react/require-optimization": 0,
    // Enforce ES5 or ES6 class for returning value in render function
    "react/require-render-return": 0,
    // Prevent extra closing tags for components without children (fixable)
    "react/self-closing-comp": 0,
    // Enforce component methods order (fixable)
    "react/sort-comp": 0,
    // Enforce propTypes declarations alphabetical sorting
    "react/sort-prop-types": 0,
    // Enforce style prop value being an object
    "react/style-prop-object": 0,
    // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
    "react/void-dom-elements-no-children": 0,

    /////////// JSX SPECIFIC RULES //////////

    // Enforce boolean attributes notation in JSX (fixable)
    "react/jsx-boolean-value": 0,
    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
    "react/jsx-child-element-spacing": 0,
    // Validate closing bracket location in JSX (fixable)
    "react/jsx-closing-bracket-location": 0,
    // Validate closing tag location in JSX (fixable)
    "react/jsx-closing-tag-location": 0,
    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions (fixable)
    "react/jsx-curly-spacing": 0,
    // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
    "react/jsx-equals-spacing": 0,
    // Restrict file extensions that may contain JSX
    "react/jsx-filename-extension": 0,
    // Enforce position of the first prop in JSX (fixable)
    "react/jsx-first-prop-new-line": 0,
    // Enforce event handler naming conventions in JSX
    "react/jsx-handler-names": 0,
    // Validate JSX indentation (fixable)
    "react/jsx-indent": 0,
    // Validate props indentation in JSX (fixable)
    "react/jsx-indent-props": 0,
    // Validate JSX has key prop when in array or iterator
    "react/jsx-key": 0,
    // Validate JSX maximum depth
    "react/jsx-max-depth": 0,
    // Limit maximum of props on a single line in JSX (fixable)
    "react/jsx-max-props-per-line": 0,
    // Prevent usage of .bind() and arrow functions in JSX props
    "react/jsx-no-bind": 0,
    // Prevent comments from being inserted as text nodes
    "react/jsx-no-comment-textnodes": 0,
    // Prevent duplicate props in JSX
    "react/jsx-no-duplicate-props": 0,
    // Prevent usage of unwrapped JSX strings
    "react/jsx-no-literals": 0,
    // Prevent usage of unsafe target='_blank'
    "react/jsx-no-target-blank": 0,
    // Disallow undeclared variables in JSX
    "react/jsx-no-undef": 0,
    // Limit to one expression per line in JSX
    "react/jsx-one-expression-per-line": 0,
    // Enforce curly braces or disallow unnecessary curly braces in JSX
    "react/jsx-curly-brace-presence": 0,
    // Enforce shorthand or standard form for React fragments
    "react/jsx-fragments": 0,
    // Enforce PascalCase for user-defined JSX components
    "react/jsx-pascal-case": 0,
    // Disallow multiple spaces between inline JSX props (fixable)
    "react/jsx-props-no-multi-spaces": 0,
    // Enforce default props alphabetical sorting
    "react/jsx-sort-default-props": 0,
    // Enforce props alphabetical sorting (fixable)
    "react/jsx-sort-props": 0,
    // Validate spacing before closing bracket in JSX (fixable)
    "react/jsx-space-before-closing": 0,
    // Validate whitespace in and around the JSX opening and closing brackets (fixable)
    "react/jsx-tag-spacing": 0,
    // Prevent React to be incorrectly marked as unused
    "react/jsx-uses-react": 0,
    // Prevent variables used in JSX to be incorrectly marked as unused
    "react/jsx-uses-vars": 0,
    // Prevent missing parentheses around multilines JSX (fixable)
    "react/jsx-wrap-multilines": 0
  }
};
