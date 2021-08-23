let [n, c] = require("fs")
    .readFileSync("/dev/stdin", "utf8")
    .split(".")
    .map((i) => parseInt(i));
    
console.log("NOTAS:");
console.log(`${Math.floor(n / 100)} nota(s) de R$ 100.00`);
n %= 100;
console.log(`${Math.floor(n / 50)} nota(s) de R$ 50.00`);
n %= 50;
console.log(`${Math.floor(n / 20)} nota(s) de R$ 20.00`);
n %= 20;
console.log(`${Math.floor(n / 10)} nota(s) de R$ 10.00`);
n %= 10;
console.log(`${Math.floor(n / 5)} nota(s) de R$ 5.00`);
n %= 5;
console.log(`${Math.floor(n / 2)} nota(s) de R$ 2.00`);
n %= 2;
console.log("MOEDAS:");
console.log(`${n} moeda(s) de R$ 1.00`);
console.log(`${Math.floor(c / 50)} moeda(s) de R$ 0.50`);
c %= 50;
console.log(`${Math.floor(c / 25)} moeda(s) de R$ 0.25`);
c %= 25;
console.log(`${Math.floor(c / 10)} moeda(s) de R$ 0.10`);
c %= 10;
console.log(`${Math.floor(c / 5)} moeda(s) de R$ 0.05`);
c %= 5;
console.log(`${c} moeda(s) de R$ 0.01`);
