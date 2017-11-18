console.log('Setting up...');
const solc = require('solc');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log('Reading contract...');
const deployedHelloWorldContractInstance = web3.eth.getCode("0x69077b696b6eadd02e5b757cea29fb7fd0264a2f");
// Change the address for your deployed contracts address
console.log('Contract Code: ' + deployedHelloWorldContractInstance);
