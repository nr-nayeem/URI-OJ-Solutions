let r = parseFloat(require("fs").readFileSync("/dev/stdin", "utf8").trim());
const pi = 3.14159;
console.log(`A=${(pi * r * r).toFixed(4)}`);