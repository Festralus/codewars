function incrementString(strng) {
  const digits = /\d+$/;
  const endsWithNumber = strng.match(digits);

  if (!endsWithNumber) return strng + "1";

  const splitIndex = endsWithNumber[0].length;
  const prefix = strng.slice(0, -splitIndex);
  let suffix = strng.slice(-splitIndex);

  return prefix + String(Number(suffix) + 1).padStart(suffix.length, 0);
}

console.log(incrementString("foo")); // returns foo1
console.log(incrementString("foo0042")); // returns foo0043
console.log(incrementString("1")); // returns 2
