function digitalRoot(n) {
  const arr = (n + "").split("");

  if (arr.length === 1) return n;

  const sum = arr.reduce((acc, val) => {
    return +acc + +val;
  }, 0);

  if ((sum + "").split("").length > 1) return digitalRoot(sum);
  return sum;
}

console.log(digitalRoot(456)); // expect "6"
