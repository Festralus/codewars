function landPerimeter(arr) {
  const arrays = arr.map((a) => a.split(""));
  let totalPerimeter = 0;

  arrays.forEach((arr, index) => {
    arr.forEach((cell, i) => {
      if (cell === "X") {
        let sides = 4;

        if (i - 1 >= 0 && arrays[index][i - 1] === "X") sides--;
        if (i + 1 < arr.length && arrays[index][i + 1] === "X") sides--;
        if (arrays[index - 1] && arrays[index - 1][i] === "X") sides--;
        if (arrays[index + 1] && arrays[index + 1][i] === "X") sides--;

        return (totalPerimeter += sides);
      }
    });
  });

  return "Total land perimeter: " + totalPerimeter;
}

console.log(landPerimeter(["XOOXO", "XOOXO", "OOOXO", "XXOXO", "OXOOO"])); // returns Total land perimeter: 24
console.log(
  landPerimeter([
    "OXOOOX",
    "OXOXOO",
    "XXOOOX",
    "OXXXOO",
    "OOXOOX",
    "OXOOOO",
    "OOXOOX",
    "OOXOOO",
    "OXOOOO",
    "OXOOXX",
  ])
); // returns Total land perimeter: 60
console.log(
  landPerimeter([
    "XOOOXOO",
    "OXOOOOO",
    "XOXOXOO",
    "OXOXXOO",
    "OOOOOXX",
    "OOOXOXX",
    "XXXXOXO",
  ])
); // returns Total land perimeter: 54
