function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}

console.log(solution("")); // expect ""
console.log(solution("camelCasing")); // expect "camel Casing"
console.log(solution("camelCasingTest")); // expect "camel Casing Test"
