let [n, salary, soldAmount] = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");
console.log(`TOTAL = R$ ${(parseFloat(salary) + parseFloat(soldAmount) * 0.15).toFixed(2)}`);
