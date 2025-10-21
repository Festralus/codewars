# Product of consecutive Fib numbers - 5kyu-medium

## Instructions

https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript

You need to find two consecutive Fibonacci numbers F(n) and F(n+1) such that their product equals or just exceeds a given number prod.

Return an array [F(n), F(n+1), true] if
F(n) \* F(n+1) === prod,
otherwise return [F(n), F(n+1), false] where the product is the first one greater than prod.

### Examples

```
714 ---> (21, 34, true)
--> since F(8) = 21, F(9) = 34 and 714 = 21 * 34

800 --->  (34, 55, false)
--> since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
```

## Sample tests

```
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.sameOrderedMembers(productFib(4895), [55, 89, true])
    assert.sameOrderedMembers(productFib(5895), [89, 144, false])
    assert.sameOrderedMembers(productFib(74049690), [6765, 10946, true])
    assert.sameOrderedMembers(productFib(84049690), [10946, 17711, false])
    assert.sameOrderedMembers(productFib(193864606), [10946, 17711, true])
    assert.sameOrderedMembers(productFib(447577), [610, 987, false])
    assert.sameOrderedMembers(productFib(602070), [610, 987, true])
  });
});

```
