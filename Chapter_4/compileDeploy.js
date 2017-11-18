console.log('Setting up...');
const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log('Reading Contract...');
const input = fs.readFileSync('Chapter_4/HelloWorldContract.sol');
console.log('Compiling Contract...');
const output = solc.compile(input.toString(), 1);
const bytecode = output.contracts[':HelloWorldContract'].bytecode;
const abi = output.contracts[':HelloWorldContract'].interface;
const helloWorldContract = web3.eth.contract(JSON.parse(abi));
console.log('unlocking Coinbase account');
const password = "your Password or passphrase";
try {
  web3.personal.unlockAccount(web3.eth.coinbase, password);
} catch (e) {
  console.log(e);
  return;
}
console.log("Deploying the contract");
const helloWorldContractInstance = helloWorldContract.new({
  data: '0x' + bytecode,
  from: web3.eth.coinbase,
  gas: 1000000
}, function(err, res) {
  if (err) {
    console.log('there were errors:' + err);
  }
  if (res.address) {
    console.log('txHash:' + res.transactionHash);
    console.log('Successfully deployed Contract with address: ' + res.address);
  }

});
