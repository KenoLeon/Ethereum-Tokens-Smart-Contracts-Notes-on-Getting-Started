console.log('Setting up...');
const solc = require ('solc');
const Web3 = require ('web3');
console.log('Reading abi');
const HelloWorldABI = require("./HelloWorldABI.json");
console.log('Connecting');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const helloWorldContract = web3.eth.contract(HelloWorldABI);
var helloWorldContractInstance = helloWorldContract.at("0x69077b696b6eadd02e5b757cea29fb7fd0264a2f");
console.log(helloWorldContractInstance);
