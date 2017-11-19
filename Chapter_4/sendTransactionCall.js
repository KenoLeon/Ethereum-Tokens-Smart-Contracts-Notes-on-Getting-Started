console.log('Setting up...');
const solc = require ('solc');
const Web3 = require ('web3');
console.log('Reading abi');
const HelloWorldABI = require("./HelloWorldABI.json");
console.log('Connecting');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log('Creating contract instance');
const helloWorldContract = web3.eth.contract(HelloWorldABI);
var helloWorldContractInstance = helloWorldContract.at("0x69077b696b6eadd02e5b757cea29fb7fd0264a2f");
console.log('unlocking Coinbase account');
const password = "your Password or passphrase";
try {
  web3.personal.unlockAccount(web3.eth.coinbase, password);
} catch(e) {
  console.log(e);
  return;
}
console.log ('sending Transaction to the contract');
helloWorldContractInstance.sayHi.sendTransaction({from:web3.eth.coinbase}, function(err, txHash) {
  if (err != null) {
         console.error("Error while sending transaction: " + err);
       }
       else{
         console.log("Transaction Sent here's you  txHash: " + txHash);
       }
});
