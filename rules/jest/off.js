"use strict";

module.exports = {
  plugins: ["jest"],
  rules: {
    // Enforce consistent test or it keyword
    "consistent-test-it": 0,
    // Enforce assertion to be made in a test body
    "expect-expect": 0,
    // Disallow capitalized test names
    "lowercase-name": 0,
    // Disallow alias methods
    "no-alias-methods": 0,
    // Disallow disabled tests
    "no-disabled-tests": 0,
    // Disallow focused tests
    "no-focused-tests": 0,
    // Disallow setup and teardown hooks
    "no-hooks": 0,
    // Disallow identical titles
    "no-identical-title": 0,
    // Disallow Jasmine globals
    "no-jasmine-globals": 0,
    // Disallow importing jest
    "no-jest-import": 0,
    // Disallow large snapshots
    "no-large-snapshots": 0,
    // Using a callback in asynchronous tests
    "no-test-callback": 0,
    // Disallow using f & x prefixes to define focused/skipped tests
    "no-test-prefixes": 0,
    // Disallow explicitly returning from tests
    "no-test-return-statement": 0,
    // Disallow using toBeTruthy() & toBeFalsy()
    "no-truthy-falsy": 0,
    // Suggest using expect.assertions() OR expect.hasAssertions()
    "prefer-expect-assertions": 0,
    // Suggest using jest.spyOn()
    "prefer-spy-on": 0,
    // Suggest using toStrictEqual()
    "prefer-strict-equal": 0,
    // Suggest using toBeNull()
    "prefer-to-be-null": 0,
    // Suggest using toBeUndefined()
    "prefer-to-be-undefined": 0,
    // Suggest using toContain()
    "prefer-to-contain": 0,
    // Suggest using toHaveLength()
    "prefer-to-have-length": 0,
    // Suggest using toMatchInlineSnapshot()
    "prefer-inline-snapshots": 0,
    // Require that toThrow() and toThrowError includes a message
    "require-tothrow-message": 0,
    // Enforce valid describe() callback
    "valid-describe": 0,
    // Enforce having return statement when testing with promises
    "valid-expect-in-promise": 0,
    // Enforce valid expect() usage
    "valid-expect": 0
  }
};
