let inputs = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
let [, units1, ppu1] = inputs[0].split(" ");
let [, units2, ppu2] = inputs[1].split(" ");
console.log(
  `VALOR A PAGAR: R$ ${(
    parseInt(units1) * parseFloat(ppu1) +
    parseInt(units2) * parseFloat(ppu2)
  ).toFixed(2)}`
);
