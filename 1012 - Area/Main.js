let [a, b, c] = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split(" ")
  .map((i) => parseFloat(i));
console.log(`TRIANGULO: ${(0.5 * a * c).toFixed(3)}`);
console.log(`CIRCULO: ${(3.14159 * c * c).toFixed(3)}`);
console.log(`TRAPEZIO: ${(0.5 * (a + b) * c).toFixed(3)}`);
console.log(`QUADRADO: ${(b * b).toFixed(3)}`);
console.log(`RETANGULO: ${(a * b).toFixed(3)}`);
