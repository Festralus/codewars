function scramble(str1, str2) {}

// First try - inefficient solution:

// function scramble(str1, str2) {
//   return str2.split("").every((l) => {
//     if (str1.includes(l)) {
//       const regex = new RegExp(l);
//       str1 = str1.replace(regex, "");
//       return true;
//     }
//     return false;
//   });
// }

console.log(scramble("rkqodlw", "world")); // returns true
console.log(scramble("katas", "steak")); // returns false
console.log(scramble("aabbcamaomsccdd", "commas")); // returns true
