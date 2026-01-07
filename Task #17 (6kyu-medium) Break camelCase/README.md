# Break camelCase - 6kyu-medium

## Instructions

Complete the solution so that the function will break up camel casing, using a space between words.

### Examples

```
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

```

## Sample tests

```
const { assert } = require("chai");

describe("Sample tests", () => {
  it("Sample test 1", () => {
    assert.strictEqual(solution(""), "", `solution("")`);
  });
  it("Sample test 2", () => {
    assert.strictEqual(solution("camelCasing"), "camel Casing", `solution("camelCasing")`);
  });
  it("Sample test 3", () => {
    assert.strictEqual(solution("camelCasingTest"), "camel Casing Test", `solution("camelCasingTest")`);
  });
});
```
