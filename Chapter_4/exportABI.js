console.log('Setting up...');
const fs = require ('fs');
const solc = require ('solc');
const Web3 = require ('web3');
console.log('Reading Contract...');
const input = fs.readFileSync('Chapter_4/HelloWorldContract.sol');
console.log('Compiling Contract...');
const output = solc.compile(input.toString(), 1);
const bytecode = output.contracts[':HelloWorldContract'].bytecode;
console.log('Generating ABI...');
const abi = output.contracts[':HelloWorldContract'].interface;
fs.writeFile("./Chapter_4/HelloWorldABI.JSON", abi, function(err) {
    if(err) {
        return console.log(err);
    }
console.log("ABI Saved");
});
