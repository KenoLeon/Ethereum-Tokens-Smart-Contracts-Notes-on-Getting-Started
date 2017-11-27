const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const input = fs.readFileSync('Chapter_4/HelloWorldContract.sol');
const output = solc.compile(input.toString(), 1);
const bytecode = output.contracts[':HelloWorldContract'].bytecode;
const abi = output.contracts[':HelloWorldContract'].interface;
const HelloWorldContract = web3.eth.contract(JSON.parse(abi));
console.log(HelloWorldContract.abi);


// [ { constant: true,
//     inputs: [],
//     name: 'sayHi',
//     outputs: [ [Object] ],
//     payable: false,
//     type: 'function' } ]
