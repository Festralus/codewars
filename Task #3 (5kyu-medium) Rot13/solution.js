let X = "Test AaZzKk";

// SOLUTION #1

function rot13(message) {
  const cipheredMsg = message
    .split("")
    .map((l) => {
      const code = l.charCodeAt(0);
      const shiftedCode = code + 13;

      const isSmall = checkSmallLetters(l);
      const isCapital = checkCapitalLetters(l);

      const aCode = "a".charCodeAt(0);
      const zCode = "z".charCodeAt(0);
      const ACode = "A".charCodeAt(0);
      const ZCode = "Z".charCodeAt(0);

      if (
        (isSmall && shiftedCode >= aCode && shiftedCode <= zCode) ||
        (isCapital && shiftedCode >= ACode && shiftedCode <= ZCode)
      )
        return String.fromCharCode(shiftedCode);

      if (isSmall || isCapital) return String.fromCharCode(shiftedCode - 26);

      return l;
    })
    .join("");
  return cipheredMsg;
}

function checkSmallLetters(l) {
  return l >= "a" && l <= "z";
}

function checkCapitalLetters(l) {
  return l >= "A" && l <= "Z";
}

// SOLUTION #2

// function rot13(message) {
//   const cipheredMsg = message
//     .split("")
//     .map((l) => {
//       const code = l.charCodeAt(0);

//       let base;
//       if (isUpper(code)) base = 65;
//       else if (isLower(code)) base = 97;
//       else return l;

//       const shiftedCode = ((code - base + 13) % 26) + base;
//       return String.fromCharCode(shiftedCode);
//     })
//     .join("");
//   return cipheredMsg;
// }

// function isLower(c) {
//   return c >= 97 && c <= 122;
// }

// function isUpper(c) {
//   return c >= 65 && c <= 90;
// }

console.log(rot13(X));
