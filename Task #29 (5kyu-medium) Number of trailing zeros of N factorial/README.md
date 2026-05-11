# Number of trailing zeros of N! - 5kyu-medium

## Instructions

Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 _ 2 _ 3 _ ... _ N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.

### Examples

```
N	Product	                        N factorial 	Trailing zeros
6	1*2*3*4*5*6	                        720	              1
12	1*2*3*4*5*6*7*8*9*10*11*12	    479001600	          2

```

## Sample tests

```
const Test = require('@codewars/test-compat');

describe("Sample Tests", function() {
  it("Should pass sample tests", function() {
    Test.assertEquals(zeros(0), 0, "Testing with n = 0")
    Test.assertEquals(zeros(5), 1, "Testing with n = 5")
    Test.assertEquals(zeros(6), 1, "Testing with n = 6")
    Test.assertEquals(zeros(30), 7, "Testing with n = 30")
  });
});
```
