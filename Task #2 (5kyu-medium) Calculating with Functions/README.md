# Calculating with Functions - 5kyu-medium

## Instructions

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

### Examples

```
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
```

## Sample tests

```
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(seven(times    (five ())), 35, "seven(times(five ()))");
    assert.strictEqual(four (plus     (nine ())), 13, "four (plus(nine ()))");
    assert.strictEqual(eight(minus    (three())),  5, "eight(minus(three()))");
    assert.strictEqual(six  (dividedBy(two  ())),  3, "six(dividedBy(two()))");
  });
});

```
