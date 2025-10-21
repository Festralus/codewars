function productFib(prod) {
  let a = 0;
  let b = 1;
  let fibResult = null;
  while (prod) {
    if (a * b >= prod) break;
    fibResult = a + b;
    a = b;
    b = fibResult;
  }

  const isProducOfFib = a * b === prod;

  return [a, b, isProducOfFib];
}

console.log(productFib(714)); // [21, 34, true]
console.log(productFib(800)); // [34, 55, false]
console.log(productFib(4895)); // [55, 89, true]
console.log(productFib(5895)); // [89, 144, false]
console.log(productFib(84049690)); // [10946, 17711, false]
console.log(productFib(193864606)); // [10946, 17711, true]
