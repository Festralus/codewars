# Only one - 7kyu-easy

## Instructions

Task: Write a function which returns True if ONLY ONE of the boolean flag is True, otherwise return False. If there are no boolean flag, return False

### Examples

```
[] False
[True, False, False] True
[True, False, False, True] False
[False, False, False, False] False
```

## Sample tests

```
const { expect } = require('chai');
const _ = require('lodash');

describe("onlyOne", () => {

  describe("Basic tests", () => {
    it("no arguments", () => {
      expect(onlyOne()).to.equal(false);
    });

    it("one true and one false", () => {
      expect(onlyOne(true, false)).to.equal(true);
    });

    it("all flags are false", () => {
      expect(onlyOne(false, false, false)).to.equal(false);
    });

    it("two flags are true", () => {
      expect(onlyOne(true, false, false, true)).to.equal(false);
    });
  });
});
```
