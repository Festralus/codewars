function onlyOne(...arr) {
  if (!arr) return false;

  let count = 0;
  for (const val of arr) {
    if (val === true) {
      count++;
    }
    if (count > 1) return false;
  }
  return count === 1;
}

console.log(onlyOne([True, False, False])); // expect True
console.log(onlyOne([])); // expect False
console.log(onlyOne([True, False, False, True])); // expect False
