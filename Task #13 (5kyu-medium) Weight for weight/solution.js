function orderWeight(string) {
  if (string.trim() === "") return "";

  const objects = string.split(/\s+/).map((n) => {
    return {
      original: n,
      weight: null,
    };
  });

  const populatedWeights = objects.map((o) => {
    o.weight = o.original.split("").reduce((a, b) => Number(a) + Number(b), 0);
    return o;
  });

  const weightedValues = populatedWeights.sort((a, b) =>
    a.weight === b.weight
      ? a.original < b.original
        ? -1
        : a.original > b.original
        ? 1
        : 0
      : a.weight - b.weight
  );

  return weightedValues.map((w) => w.original).join(" ");
}

console.log(orderWeight("56 65 74 100 99 68 86 180 90")); // "100 180 90 56 65 74 68 86 99"
console.log(orderWeight("103 123 4444 99 2000")); // 2000 103 123 4444 99
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")); // 11 11 2000 10003 22 123 1234000 44444444 9999
