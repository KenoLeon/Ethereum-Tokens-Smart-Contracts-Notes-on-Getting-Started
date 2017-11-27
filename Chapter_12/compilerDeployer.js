console.log('Welcome to the Compiler Deployer, Setting up...');
const fs = require('fs');
const solc = require('solc');
const Web3 = require ('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


let dir = __dirname;
console.log('Reading contract Source...');
let input = fs.readFileSync(dir + '/SetGetArrays.sol');

console.log('Compiling...');
const output = solc.compile(input.toString(), 1);

if (output.errors) {
  console.log('Compiling failed with errors:' + output.errors);
  process.exit();
}
const bytecode = output.contracts[':SetGetArrays'].bytecode;
const abi = output.contracts[':SetGetArrays'].interface;

console.log('saving ABI');

try {
  fs.writeFileSync(dir + "/SetGetArrays.json", abi)
} catch (err) {
  return console.log(err);
}
console.log("ABI Saved");

const contract = web3.eth.contract(JSON.parse(abi));

var gasEstimate = web3.eth.estimateGas({data: '0x' + bytecode});
var gasPrice = web3.eth.gasPrice;
console.log('gasEstimate: ' +  gasEstimate);
console.log('gasPrice: ' +  gasPrice);
console.log('unlocking Coinbase account');

const password = "yourPassword";
try {
  web3.personal.unlockAccount(web3.eth.coinbase, password);
} catch(e) {
  return console.log(e);
}

console.log("Deploying contract...");
const contractInstance = contract.new({
    data: '0x' + bytecode,
    from: web3.eth.coinbase,
    gasPrice: gasPrice + 1,
    gas: gasEstimate + 100000
}, function(err, res){
    if (err) {
      console.log('there were errors:' + err);
    }
    if (res.address) {
        console.log('txHash:' + res.transactionHash);
        console.log('Successfully deployed Contract with address: ' + res.address);
    }
});
