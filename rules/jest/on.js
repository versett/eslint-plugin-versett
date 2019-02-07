"use strict";

module.exports = {
  plugins: ["jest"],
  rules: {
    // Enforce consistent test or it keyword
    "jest/consistent-test-it": [2, { fn: "it", withinDescribe: "it" }],
    // Enforce assertion to be made in a test body
    "jest/expect-expect": 2,
    // Disallow capitalized test names
    "jest/lowercase-name": 2,
    // Disallow alias methods
    "jest/no-alias-methods": 2,
    // Disallow disabled tests
    "jest/no-disabled-tests": 2,
    // Disallow focused tests
    "jest/no-focused-tests": 2,
    // Disallow setup and teardown hooks
    "jest/no-hooks": 0,
    // Disallow identical titles
    "jest/no-identical-title": 2,
    // Disallow Jasmine globals
    "jest/no-jasmine-globals": 2,
    // Disallow importing jest
    "jest/no-jest-import": 2,
    // Disallow large snapshots
    "jest/no-large-snapshots": 0,
    // Using a callback in asynchronous tests
    "jest/no-test-callback": 0,
    // Disallow using f & x prefixes to define focused/skipped tests
    "jest/no-test-prefixes": 2,
    // Disallow explicitly returning from tests
    "jest/no-test-return-statement": 0,
    // Disallow using toBeTruthy() & toBeFalsy()
    "jest/no-truthy-falsy": 0,
    // Suggest using expect.assertions() OR expect.hasAssertions()
    "jest/prefer-expect-assertions": 0,
    // Suggest using jest.spyOn()
    "jest/prefer-spy-on": 2,
    // Suggest using toStrictEqual()
    "jest/prefer-strict-equal": 2,
    // Suggest using toBeNull()
    "jest/prefer-to-be-null": 2,
    // Suggest using toBeUndefined()
    "jest/prefer-to-be-undefined": 2,
    // Suggest using toContain()
    "jest/prefer-to-contain": 2,
    // Suggest using toHaveLength()
    "jest/prefer-to-have-length": 2,
    // Suggest using toMatchInlineSnapshot()
    "jest/prefer-inline-snapshots": 0,
    // Require that toThrow() and toThrowError includes a message
    "jest/require-tothrow-message": 2,
    // Enforce valid describe() callback
    "jest/valid-describe": 2,
    // Enforce having return statement when testing with promises
    "jest/valid-expect-in-promise": 2,
    // Enforce valid expect() usage
    "jest/valid-expect": 2
  }
};
