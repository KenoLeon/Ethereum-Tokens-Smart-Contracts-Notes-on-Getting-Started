console.log('Setting up...');
const solc = require ('solc');
const Web3 = require ('web3');
console.log('Reading abi');
const contractABI = require("./basicStorage.json");
console.log('Connecting');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log('Creating contract instance');
const basicStorage = web3.eth.contract(contractABI);
var basicStorageInstance = basicStorage.at("0x55df154522ed4cd5b2d2fb3a298c04a90f8c3333");
var estimatedTransactionGas =  basicStorageInstance.set.estimateGas(220);
console.log('Estimated Transaction Gas:' + estimatedTransactionGas);
