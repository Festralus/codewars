# Mean Square Error - 5kyu-medium

## Instructions

Complete the function that

accepts two integer arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values
and returns the average of those squared absolute value difference between each member pair.

### Examples

```
[1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
[10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
[-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2
```

## Sample tests

```
const { assert, config } = require('chai');
config.truncateThreshold = 0;
const _ = require('lodash');

describe("solution", function() {
  it("Sample tests", function() {
    tester([1,2,3], [4,5,6], 9);
    tester([10,20,10,2], [10,25,5,-2], 16.5);
    tester([0,-1], [-1,0], 1);
  });

  function tester(arr1, arr2, expected) {
    const TOLERANCE = 1e-9;
    const err_msg = `Failed for inputs:\n- arr1: ${JSON.stringify(arr1)}\n- arr2: ${JSON.stringify(arr2)}\n`;
    assert.approximately(solution(arr1, arr2), expected, TOLERANCE, err_msg);
  }
});
```
