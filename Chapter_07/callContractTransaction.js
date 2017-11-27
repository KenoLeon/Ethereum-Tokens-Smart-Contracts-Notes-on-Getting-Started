console.log('Setting up...');
const solc = require ('solc');
const Web3 = require ('web3');
console.log('Reading abi');
const contractABI = require("./MinimalToken.json");
console.log('Connecting');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log('Creating contract instance');
// Note the condensed contractInstance:
var contract = web3.eth.contract(contractABI).at("0x8caaa1f263ff14d0276ff1a1a6ed15c51159d6e0");
var receiverAddress = '0x00Ce6C92856A657979E7728005DBc9acD002Eb09';
// Dry run to estimate Gas:
var callData = contract.transfer.getData(receiverAddress, 2000);
var gasEstimate = web3.eth.estimateGas({
    from: web3.eth.coinbase,
    to: "0x8caaa1f263ff14d0276ff1a1a6ed15c51159d6e0",
    data: callData
});
var gasPrice = web3.eth.gasPrice;
console.log('gas Price: ' + gasPrice);
console.log('Estimated Transaction gas: ' + gasEstimate);
console.log('unlocking Coinbase account');
const password = "your_password";
try {
  web3.personal.unlockAccount(web3.eth.coinbase, password);
} catch(e) {
  console.log(e);
  return;
}
console.log ('sending Transaction to the contract');
// Sending transaction with estimates:
const transaction = {
  from: web3.eth.coinbase,
  gas: gasEstimate + 1,
  gasPrice: gasPrice + 1
}
contract.transfer.sendTransaction(receiverAddress, 2000, transaction, function(err, txHash) {
  if (err != null) {
         console.error("Error while sending transaction: " + err);
       }
       else{
         console.log("Transaction Sent here's you  txHash: " + txHash);
       }
});
