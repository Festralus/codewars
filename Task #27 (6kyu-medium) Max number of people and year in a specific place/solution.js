function yearMaxPeople(records) {
  const changes = [];
  const eachYearsPeak = [];
  let currentPop = 0;

  for (let i = 0; i < records.length; i++) {
    changes.push([records[i][0], 1]);
    changes.push([records[i][1], -1]);
  }

  const sortedList = changes.sort((a, b) => {
    return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0];
  });

  for (let i = 0; i < sortedList.length; i++) {
    currentPop += sortedList[i][1];
    eachYearsPeak.push([currentPop, sortedList[i][0]]);
  }

  return eachYearsPeak.reduce((prev, curr) => {
    return curr[0] > prev[0] ? curr : prev;
  });
}

console.log(
  yearMaxPeople([
    [1988, 2013],
    [1987, 1995],
    [1980, 2010],
    [-199, -166],
    [1986, 1995],
    [1979, 1986],
    [-201, -157],
    [-170, -138],
    [1968, 1999],
  ]),
); // expect "[5, 1988]"

console.log(
  yearMaxPeople([
    [1980, 2010],
    [1979, 1985],
    [1986, 1995],
    [1987, 2008],
  ]),
); // expect "[3, 1987]"
