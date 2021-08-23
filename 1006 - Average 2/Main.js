let [a, b, c] = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n")
  .map((n) => parseFloat(n));
console.log(`MEDIA = ${((a * 2 + b * 3 + c * 5) / 10).toFixed(1)}`);
