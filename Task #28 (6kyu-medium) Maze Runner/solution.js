function mazeRunner(maze, directions) {
  let start;
  for (let i = 0; i < maze.length; i++) {
    if (maze[i].includes(2)) {
      start = [i, maze[i].indexOf(2)];
      break;
    }
  }

  const yEnd = maze.findIndex((row) => row.includes(3));
  const xEnd = maze[yEnd]?.indexOf(3);

  const dirValues = {
    N: [-1, 0],
    E: [0, 1],
    S: [1, 0],
    W: [0, -1],
  };

  let curPos = start;
  for (let step of directions) {
    const [yCurrent, xCurrent] = curPos;
    const [yChange, xChange] = dirValues[step];

    curPos = [yCurrent + yChange, xCurrent + xChange];
    const yCur = curPos[0];
    const xCur = curPos[1];

    if (maze[yCur]?.[xCur] === undefined || maze[yCur][xCur] === 1)
      return "Dead";

    if (maze[yCur][xCur] === maze[yEnd][xEnd]) return "Finish";
  }

  return "Lost";
}

console.log(
  mazeRunner(
    [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 3],
      [1, 0, 1, 0, 1, 0, 1],
      [0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 2, 1, 0, 1, 0, 1],
    ],
    ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"],
  ),
); // expect "Finish"

console.log(
  mazeRunner(
    [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 3],
      [1, 0, 1, 0, 1, 0, 1],
      [0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 2, 1, 0, 1, 0, 1],
    ],
    ["N", "N", "N", "N", "N", "E", "E", "S", "S", "S", "S", "S", "S"],
  ),
); // expect "Dead"
