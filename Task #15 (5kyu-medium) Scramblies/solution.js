function scramble(str1, str2) {
  const letters = {};
  for (let i = 0; i < str1.length; i++) {
    letters[str1[i]] = (letters[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];
    if (!letters[letter]) return false;
    letters[letter]--;
  }

  return true;
}

console.log(scramble("rkqodlw", "world")); // returns true
console.log(scramble("katas", "steak")); // returns false
console.log(scramble("aabbcamaomsccdd", "commas")); // returns true

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
