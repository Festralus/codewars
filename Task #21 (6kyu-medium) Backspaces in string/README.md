# Backspaces in string - 6kyu-medium

## Instructions

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

### Examples

```
    "abc#d##c"      ==>  "ac"
    "abc##d######"  ==>  ""
    "#######"       ==>  ""
    ""              ==>  ""
```

## Sample tests

```
const {assert} = require('chai');

describe("cleanString", () => {
  it("should work correctly", () => {
    assert.strictEqual(cleanString('abc#d##c'), 'ac');
    assert.strictEqual(cleanString('abc####d##c#'), '');
  });
});

```
