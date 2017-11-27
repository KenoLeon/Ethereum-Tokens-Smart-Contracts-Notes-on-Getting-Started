console.log('Setting up...');
const solc = require('solc');
const Web3 = require('web3');
console.log('Reading abi');
const contractABI = require("./basicStorageEv.json");
console.log('Connecting');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log('Creating contract instance');
const basicStorage = web3.eth.contract(contractABI);
var basicStorageInstance = basicStorage.at("0xc78ccc2a6c2b1f9aafad8ccf902ae310ec9a98d9");
console.log('unlocking Coinbase account');
const password = "yourPassword";
try {
  web3.personal.unlockAccount(web3.eth.coinbase, password);
} catch (e) {
  console.log(e);
  return;
}
console.log('sending Transaction to the contract');
basicStorageInstance.set.sendTransaction(30, {
  from: web3.eth.coinbase
}, function(err, txHash) {
  if (err != null) {
    console.error("Error while sending transaction: " + err);
  } else {
    console.log("Transaction Sent here's you  txHash: " + txHash);
  }
});

// If you are not interested in the callback/want a shorter version  you can use:
// basicStorageInstance.set(42, {from:web3.eth.coinbase});
