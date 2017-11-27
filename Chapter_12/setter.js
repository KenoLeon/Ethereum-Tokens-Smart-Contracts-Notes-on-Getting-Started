// File Setter.js
console.log('Setting up...');
const solc = require ('solc');
const Web3 = require ('web3');
console.log('Reading abi');
const contractABI = require("./SetGetArrays.json");
console.log('Connecting');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log('Creating contract instance');
var contract = web3.eth.contract(contractABI).at("0x467da469d904b6c5cb1ede112549d456cd1568ce");
var receiverAddress = '0x467da469d904b6c5cb1ede112549d456cd1568ce';
var array1 = [5,2,4,1];
var array2 = [3,2,3];
var setData = contract.setArrays.getData(array1,array2);
// console.log(setData);
var gasEstimate = web3.eth.estimateGas({
    from: web3.eth.coinbase,
    to: receiverAddress,
    data: setData
});
var gasPrice = web3.eth.gasPrice;
console.log('gas Price: ' + gasPrice);
console.log('Estimated Transaction gas: ' + gasEstimate);
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
  to:receiverAddress,
  value: '0x00',
  gas: gasEstimate + 1,
  gasPrice: gasPrice + 1,
  data: setData
}
web3.eth.sendTransaction( transaction, function(err, txHash) {
  if (err != null) {
         console.error("Error while sending transaction: " + err);
       }
       else{
         console.log("Transaction Sent here's you  txHash: " + txHash);
       }
});

// Transaction Sent here's you  txHash: 0xe97881c873623a59cf2e116e3805bc6834ad4e730c17c390dc517a38e5473287
