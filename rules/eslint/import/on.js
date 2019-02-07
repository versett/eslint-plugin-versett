"use strict";

module.exports = {
  plugins: ["import"],
  rules: {
    // report repeated import of the same module in multiple places
    "import/no-duplicates": 2,
    // report use of exported name as identifier of default export
    "import/no-named-as-default": 2,
    // ensure imported namespaces contain dereferenced properties as they are dereferenced
    "import/namespace": 0
  }
};
