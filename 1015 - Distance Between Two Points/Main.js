let inputs = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
let [x1, y1] = inputs.shift().split(' ').map((i)=>parseFloat(i));
let [x2, y2] = inputs.shift().split(' ').map((i)=>parseFloat(i));
console.log((Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))).toFixed(4));