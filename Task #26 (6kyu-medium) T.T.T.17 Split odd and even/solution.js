function splitOddAndEven(n) {
  const str = String(n);
  const res = [];
  let currentPart = "";

  for (let i = 0; i < str.length; i++) {
    const currentDigit = Number(str[i]);
    const isCurrentDigitEven = currentDigit % 2 === 0;

    if (currentPart === "") {
      currentPart += str[i];
    } else {
      const firstDigitInPart = Number(currentPart[0]);
      const isFirstDigitInPartEven = firstDigitInPart % 2 === 0;

      if (isCurrentDigitEven === isFirstDigitInPartEven) {
        currentPart += str[i];
      } else {
        res.push(Number(currentPart));
        currentPart = str[i];
      }
    }
  }

  if (currentPart !== "") {
    res.push(Number(currentPart));
  }

  return res;
}

console.log(splitOddAndEven(135246)); // expect "[135,246]"
console.log(splitOddAndEven(123456)); // expect "[1,2,3,4,5,6]"
