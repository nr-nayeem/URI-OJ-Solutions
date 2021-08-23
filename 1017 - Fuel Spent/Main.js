let [t, v] = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split("\n")
    .map((i) => parseInt(i));
console.log(((t * v) / 12).toFixed(3));
