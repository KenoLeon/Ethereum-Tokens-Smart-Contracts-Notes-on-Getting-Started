console.log('Setting up...');
const fs = require('fs');
const solc = require('solc');
const Web3 = require ('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log('Reading contract Source...');
const input = fs.readFileSync('Chapter_5/BasicStorage.sol');
console.log('Compiling...');
const output = solc.compile(input.toString(), 1);
if (output.errors) {
  console.log('Compiling failed with errors:' + output.errors);
  process.exit();
}
const bytecode = output.contracts[':BasicStorage'].bytecode;
const abi = output.contracts[':BasicStorage'].interface;
console.log('Saving ABI');
fs.writeFile("Chapter_5/basicStorage.json", abi, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("ABI Saved");
});
const basicStorage = web3.eth.contract(JSON.parse(abi));
console.log('Unlocking Coinbase account');
const password = "Actionscript_63";
try {
  web3.personal.unlockAccount(web3.eth.coinbase, password);
} catch(e) {
  return console.log(e);
}
console.log("Deploying contract...");
const basicStorageInstance = basicStorage.new({
    data: '0x' + bytecode,
    from: web3.eth.coinbase,
    gas: 400000
}, function(err, res){
    if (err) {
      console.log('there were errors:' + err);
    }
    if (res.address) {
        console.log('txHash:' + res.transactionHash);
        console.log('Succesfully deployed Contract with address: ' + res.address);
    }
});
