console.log('Setting up...');
const solc = require ('solc');
const Web3 = require ('web3');
console.log('Reading abi');
const contractABI = require("./CatContract.json");
console.log('Connecting');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log('Creating contract instance');
var contract = web3.eth.contract(contractABI).at("0xed1c09d2cc09098c1597b0864156be258852a506");
console.log ('calling contract');
var does = contract.doSomething.call();
console.log('Cat does : ' +  web3.toAscii(does));
