let n = parseInt(require("fs").readFileSync("/dev/stdin", "utf8"));
console.log(`${Math.floor(n / 3600)}:${Math.floor((n % 3600) / 60)}:${n % 60}`);
