// Include ethjs.ethjs.
// Run with MetaMask.
// Run with Babel / es6
window.addEventListener("load", function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== "undefined") {
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.log("No web3? You should consider trying MetaMask!");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(
      new Web3.providers.HttpProvider("https://localhost:8545")
    );
  }

  // APP >

  web3.eth.getAccounts(function(error, accounts) {
    if (!error) {
      web3.eth.getBalance(accounts[0], function(error, balance) {
        if (!error) {
          console.log(
            "Your account: " +
            accounts[0] +
            " has a balance of: " +
            balance.toNumber() / 1000000000000000000 +
            "Ether"
          );
        } else {
          console.error(error);
        }
      });
    } else {
      console.error(error);
    }
  });
});
