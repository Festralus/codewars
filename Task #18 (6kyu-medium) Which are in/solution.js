function inArray(array1, array2) {
  const result = array1.filter((el) => {
    return array2.some((word) => word.includes(el));
  });

  return result.sort();
}

console.log(
  inArray(
    ["xyz", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
); // expect ["live", "strong"]

console.log(
  inArray(
    ["tarp", "mice", "bull"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
); // expect []
