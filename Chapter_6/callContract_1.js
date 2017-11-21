console.log('Setting up...');
const solc = require ('solc');
const Web3 = require ('web3');
console.log('Reading abi');
const contractABI = require("./ConstructorContract.json");
console.log('Connecting');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log('Creating contract instance');
const contract = web3.eth.contract(contractABI);
var contractInstance = contract.at("0xde9c94de3bc99ad464e13f7279b23ceece83af9c");
console.log ('calling contract');
var returner = contractInstance.whosyourfather.call();
console.log('This contracts father is :' + returner);
//This contracts father is :0x001301ad1556fd419cf8970b174fe9af34267eb8
