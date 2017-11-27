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
var gasPrice = web3.eth.gasPrice;
console.log('Cost estimates: ' );
console.log('Estimated Transaction gas: ' + estimatedTransactionGas );
console.log('gas Price: ' + gasPrice);
console.log('unlocking Coinbase account');
const password = "yourPassword";
try {
  web3.personal.unlockAccount(web3.eth.coinbase, password);
} catch(e) {
  console.log(e);
  return;
}
console.log ('sending Transaction to the contract');
const transaction = {
  from: web3.eth.coinbase,
  gas: estimatedTransactionGas + 1000,
  gasPrice: gasPrice
}
basicStorageInstance.set.sendTransaction(883, transaction, function(err, txHash) {
  if (err != null) {
         console.error("Error while sending transaction: " + err);
       }
       else{
         console.log("Transaction Sent here's you  txHash: " + txHash);
       }
});
