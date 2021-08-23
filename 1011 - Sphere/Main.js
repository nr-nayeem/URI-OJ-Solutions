let r = parseFloat(require("fs").readFileSync("/dev/stdin", "utf8"));
console.log(`VOLUME = ${((r * r * r * 3.14159 * 4) / 3).toFixed(3)}`);
