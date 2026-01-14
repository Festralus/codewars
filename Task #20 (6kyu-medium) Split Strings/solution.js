function solution(str) {
  const result = [];

  for (let i = 0; i < str.length; i += 2) {
    const pair = str[i] + (str[i + 1] || "_");
    result.push(pair);
  }

  return result;
}

console.log(solution("abc")); // expect ['ab', 'c_']
console.log(solution("abcdef")); // expect ['ab', 'cd', 'ef']
