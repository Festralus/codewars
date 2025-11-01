let num = 12.3;

function litres(time) {
  return Math.floor(time / 2);
}

console.log(litres(num)); // litres(12.3) should return 6
console.log(litres(11.8)); // litres(11.8) should return 5
console.log(litres(1.4)); // litres(1.4) should return 0
console.log(litres(1787)); // litres(1787) should return 893
