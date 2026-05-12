function solution(list) {
  let startTracking = 0;
  let array = [];

  for (let i = 0; i < list.length; i++) {
    startTracking = i;
    while (list[i + 1] === list[i] + 1) {
      i++;
    }

    if (i - startTracking >= 2) {
      array.push(`${list[startTracking]}-${list[i]}`);
    } else {
      array.push(list[startTracking]);
      i = startTracking;
    }
  }

  return array.join(",");
}

console.log(
  solution([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ]),
); // expect "-6,-3-1,3-5,7-11,14,15,17-20"
console.log(
  solution([
    -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
    19, 20,
  ]),
); // expect "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
