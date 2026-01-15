function cleanString(s) {
  let stack = [];

  for (let char of s) {
    if (char === "#") {
      if (stack.length) stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}

console.log(cleanString("abc#d##c")); // expect 'ac'
console.log(cleanString("abc####d##c#")); // expect ''
