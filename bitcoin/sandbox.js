const btcConvert = require('./index');
const Big = require('big.js');

console.log(btcConvert(4.6, 'μBTC', 'btest'));
/*console.log(btcConvert(new Big(2), 'BTC', 'x', 'Number'));
console.log(btcConvert(NaN, 'x', 'BTC', 'Number'));
console.log(btcConvert(NaN, 'BTC', 'x', 'Number'));*/
