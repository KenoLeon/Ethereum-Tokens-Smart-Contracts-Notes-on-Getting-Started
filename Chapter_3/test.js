var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log(web3.eth.accounts);


var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.sendTransaction(
{from:web3.eth.accounts[0],
 to:web3.eth.accounts[1],
 value: web3.toWei(1, "ether")},
 function(err, transactionHash) { // Notice the callback.
  if (!err)
    console.log(transactionHash);
});
