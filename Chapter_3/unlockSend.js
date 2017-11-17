var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  var pass = "passphrase";
  web3.personal.unlockAccount(web3.eth.coinbase, pass);
  web3.eth.sendTransaction({
    from: web3.eth.accounts[0],
    to: web3.eth.accounts[1],
    value: web3.toWei(1, "ether")
  }, function(err, transactionHash) {
    if (!err)
      console.log(transactionHash);
  });
