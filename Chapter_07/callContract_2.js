console.log('Setting up...');
const solc = require('solc');
const Web3 = require('web3');
console.log('Reading abi');
const contractABI = require("./MinimalToken.json");
console.log('Connecting');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log('Creating contract instance');
const contract = web3.eth.contract(contractABI);
var contractInstance = contract.at("0x8caaa1f263ff14d0276ff1a1a6ed15c51159d6e0");
console.log('calling contract');

var tokenBalance = contractInstance.balanceOf(web3.eth.coinbase);
console.log('Your tokens balance is :' + tokenBalance);
