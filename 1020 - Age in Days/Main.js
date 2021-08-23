let n = parseInt(require("fs").readFileSync("/dev/stdin", "utf8"));
console.log(`${Math.floor(n / 365)} ano(s)`);
n %= 365;
console.log(`${Math.floor(n / 30)} mes(es)`);
console.log(`${n % 30} dia(s)`);
