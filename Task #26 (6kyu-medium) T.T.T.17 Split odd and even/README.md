# T.T.T.17 Split odd and even - 6kyu-medium

## Instructions

Complete function splitOddAndEven, accept a number n(n>0), return an array that contains the continuous parts of odd or even digits.

Please don't worry about digit 0, it won't appear ;-)

### Examples

```
splitOddAndEven(123)  ===  [1,2,3]

splitOddAndEven(223)  ===  [22,3]

splitOddAndEven(111)  ===  [111]

splitOddAndEven(13579)  ===  [13579]

splitOddAndEven(135246)  ===  [135,246]

splitOddAndEven(123456)  ===  [1,2,3,4,5,6]
```

## Sample tests

```
describe("Basic Tests", function(){
it("It should works for basic tests.", function(){

Test.assertDeepEquals(splitOddAndEven(123)  ,  [1,2,3])
Test.assertDeepEquals(splitOddAndEven(223)  ,  [22,3])
Test.assertDeepEquals(splitOddAndEven(111)  ,  [111])
Test.assertDeepEquals(splitOddAndEven(13579)  ,  [13579])
Test.assertDeepEquals(splitOddAndEven(135246)  ,  [135,246])
Test.assertDeepEquals(splitOddAndEven(123456)  ,  [1,2,3,4,5,6])

})})
```
