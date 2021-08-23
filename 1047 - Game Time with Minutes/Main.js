let [ih, im, fh, fm] = require("fs").readFileSync("/dev/stdin", "utf8").split(" ").map((n) => parseInt(n));
let tm = (fh - ih) * 60 + fm - im;
if (tm < 1) {
  tm += 1440;
}
console.log(`O JOGO DUROU ${(tm / 60) | 0} HORA(S) E ${tm % 60} MINUTO(S)`);