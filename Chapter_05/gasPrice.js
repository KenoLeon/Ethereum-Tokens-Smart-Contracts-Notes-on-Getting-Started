const Web3 = require ('web3');
console.log('Connecting');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var gasPrice = web3.eth.gasPrice;
console.log('Current Gas price:' + gasPrice.toString(10));
// Current Gas price:20000000000
