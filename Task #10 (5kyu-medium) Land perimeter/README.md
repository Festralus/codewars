# Land perimeter - 5kyu-medium

## Instructions

Given an array arr of strings, complete the function by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:

['XOOXO',
'XOOXO',
'OOOXO',
'XXOXO',
'OXOOO']
which represents:

should return: "Total land perimeter: 24".

Following input:

['XOOO',
'XOXO',
'XOXO',
'OOXX',
'OOOO']
which represents:

should return: "Total land perimeter: 18"

### Examples

```
landPerimeter(["XOOOXOO", "OXOOOOO", "XOXOXOO", "OXOXXOO", "OOOOOXX", "OOOXOXX", "XXXXOXO"]) should return "Total land perimeter: 54"

landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]) should return "Total land perimeter: 60"
```

## Sample tests

```
const { assert } = require('chai');

describe("Testing", function() {
  it("Test 1 should return 'Total land perimeter: 60'", () => {
    assert.strictEqual(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]), "Total land perimeter: 60");
  });

  it("Test 2 should return 'Total land perimeter: 52'", () => {
    assert.strictEqual(landPerimeter(["OXOOO", "OOXXX", "OXXOO", "XOOOO", "XOOOO", "XXXOO", "XOXOO", "OOOXO", "OXOOX", "XOOOO", "OOOXO"]), "Total land perimeter: 52");
  });

  it("Test 3 should return 'Total land perimeter: 40'", () => {
    assert.strictEqual(landPerimeter(["XXXXXOOO", "OOXOOOOO", "OOOOOOXO", "XXXOOOXO", "OXOXXOOX"]), "Total land perimeter: 40");
  });

  it("Test 4 should return 'Total land perimeter: 54'", () => {
    assert.strictEqual(landPerimeter(["XOOOXOO", "OXOOOOO", "XOXOXOO", "OXOXXOO", "OOOOOXX", "OOOXOXX", "XXXXOXO"]), "Total land perimeter: 54");
  });

  it("Test 5 should return 'Total land perimeter: 40'", () => {
    assert.strictEqual(landPerimeter(["OOOOXO", "XOXOOX", "XXOXOX", "XOXOOO", "OOOOOO", "OOOXOO", "OOXXOO"]), "Total land perimeter: 40");
  });
});
```
