let [a, b, c] = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split(" ")
  .map((i) => parseInt(i));
console.log(`${Math.max(a, b, c)} eh o maior`);
