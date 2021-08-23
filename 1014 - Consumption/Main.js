let [x, y] = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
console.log(`${(x / y).toFixed(3)} km/l`);
