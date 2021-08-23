let [num, hpm, mph] = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");
console.log(`NUMBER = ${num}`);
console.log(`SALARY = U$ ${(parseInt(hpm) * parseFloat(mph)).toFixed(2)}`);
