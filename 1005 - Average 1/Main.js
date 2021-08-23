let [a, b] = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n")
  .map((n) => parseFloat(n));
console.log(`MEDIA = ${((a * 3.5 + b * 7.5) / 11).toFixed(5)}`);
