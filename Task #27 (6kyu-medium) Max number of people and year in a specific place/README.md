# Max number of people and year in a specific place - 5kyu-medium

## Instructions

As a historian, you wonder how many people ever lived in a specific area.

Given an amount of records as an array/vector/list of arrays/pairs/tuples representing the year of arrival/birth and departure/death from a given area, your task is to write a function that returns the maximum for that area and the year in which said maximum was achieved.

If more years have that maximum, just return the first one of them.

If you have both people entering and exiting the territory in the same year, consider that all new comers arrived/were born before anyone left/died for the sake of computing when the maximum was achieved

You will always be given at least one record of beginning/ending of a presence on the territory in valid format (ie: the first value will be lesser than or equal to the second).

### Examples

```
yearMaxPeople([[1978, 1978], [1969, 1998]]) === [2, 1978]
yearMaxPeople([[1980, 2010], [1979, 1985], [1986, 1995], [1987, 2008]]) === [3, 1987]
yearMaxPeople([[1980, 2010], [1979, 1986], [1986, 1995], [1987, 2008]]) === [3, 1986]
```

## Sample tests

```
describe("tests", function() {
    const {assert, config} = require('chai');
    config.truncateThreshold = 0;

    function doTest(records, expected) {
        const message = `for input: ` + (
            (records.length <= 500) ? JSON.stringify(records) : '[array too large to display]'
        ) + '\n \n';
        const actual = yearMaxPeople(records);
        assert.deepEqual(actual, expected, message);
    }

    it("sample tests", function() {
        doTest([[1980, 2010], [1979, 1985], [1986, 1995], [1987, 2008]],
               [3, 1987]);
        doTest([[1980, 2010], [1979, 1986], [1986, 1995], [1987, 2008]],
               [3, 1986]);
        doTest([[1980, 2010], [-199, -199], [1979, 1986], [-201, -157], [-170, -138]],
               [2, -199]);
        doTest([[1980, 2010], [-199, -166], [1979, 1986], [-201, -157], [-170, -138]],
               [3, -170]);
        doTest([
            [1988, 2013], [1987, 1995], [1980, 2010], [-199, -166], [1986, 1995],
            [1979, 1986], [-201, -157], [-170, -138], [1968, 1999]
        ], [5, 1988]);
    });
});
```
