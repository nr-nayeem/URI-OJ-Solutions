const [a, b] = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n').map((n)=>parseInt(n));
console.log(`SOMA = ${a + b}`);