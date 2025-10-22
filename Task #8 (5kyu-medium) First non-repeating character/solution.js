function firstNonRepeatingLetter(s) {
  const letters = Array.from(s.toLowerCase() || []);
  const count = {};

  letters.map((l) => {
    if (l in count) count[l]++;
    else count[l] = 1;
  });

  const uniqueLetters = Object.keys(count).filter((l) => count[l] === 1);
  if (uniqueLetters.length === 0) return "";

  const uniqueString = s
    .split("")
    .map((c) => {
      return uniqueLetters.includes(c.toLowerCase()) ? c : null;
    })
    .join("");

  const symbol = uniqueString[0];

  return symbol;
}

console.log(firstNonRepeatingLetter("ws1k")); // returns w
console.log(firstNonRepeatingLetter("stress")); // returns t
console.log(firstNonRepeatingLetter("sTreSS")); // returns T
console.log(firstNonRepeatingLetter("a")); // returns a
console.log(firstNonRepeatingLetter("moonmen")); // returns e
