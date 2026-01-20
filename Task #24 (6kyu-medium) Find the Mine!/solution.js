function mineLocation(field) {
  const rowIndex = field.findIndex((row) => row.includes(1));
  const colIndex = field[rowIndex].indexOf(1);

  return [rowIndex, colIndex];
}

console.log(
  mineLocation([
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]),
); // expect [0, 0]
console.log(
  mineLocation([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]),
); // expect [1, 1]
