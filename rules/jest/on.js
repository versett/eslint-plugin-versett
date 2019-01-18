"use strict";

module.exports = {
  plugins: ["jest"],
  rules: {
    // Enforce consistent test or it keyword
    "consistent-test-it": [2, { fn: "it", withinDescribe: "it" }],
    // Enforce assertion to be made in a test body
    "expect-expect": 2,
    // Disallow capitalized test names
    "lowercase-name": 2,
    // Disallow alias methods
    "no-alias-methods": 2,
    // Disallow disabled tests
    "no-disabled-tests": 2,
    // Disallow focused tests
    "no-focused-tests": 2,
    // Disallow setup and teardown hooks
    "no-hooks": 0,
    // Disallow identical titles
    "no-identical-title": 2,
    // Disallow Jasmine globals
    "no-jasmine-globals": 2,
    // Disallow importing jest
    "no-jest-import": 2,
    // Disallow large snapshots
    "no-large-snapshots": 0,
    // Using a callback in asynchronous tests
    "no-test-callback": 0,
    // Disallow using f & x prefixes to define focused/skipped tests
    "no-test-prefixes": 2,
    // Disallow explicitly returning from tests
    "no-test-return-statement": 2,
    // Disallow using toBeTruthy() & toBeFalsy()
    "no-truthy-falsy": 0,
    // Suggest using expect.assertions() OR expect.hasAssertions()
    "prefer-expect-assertions": 0,
    // Suggest using jest.spyOn()
    "prefer-spy-on": 2,
    // Suggest using toStrictEqual()
    "prefer-strict-equal": 2,
    // Suggest using toBeNull()
    "prefer-to-be-null": 2,
    // Suggest using toBeUndefined()
    "prefer-to-be-undefined": 2,
    // Suggest using toContain()
    "prefer-to-contain": 2,
    // Suggest using toHaveLength()
    "prefer-to-have-length": 2,
    // Suggest using toMatchInlineSnapshot()
    "prefer-inline-snapshots": 0,
    // Require that toThrow() and toThrowError includes a message
    "require-tothrow-message": 0,
    // Enforce valid describe() callback
    "valid-describe": 2,
    // Enforce having return statement when testing with promises
    "valid-expect-in-promise": 2,
    // Enforce valid expect() usage
    "valid-expect": 2
  }
};
