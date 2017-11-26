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

  const eth = new Eth(window.web3.currentProvider);
  eth
    .coinbase()
    .then(coinbase => eth.getBalance(coinbase))
    .then(balance =>
      console.log(
        "Your coinbase has a balance of: " + Eth.fromWei(balance, "ether")
      )
    )
    .catch(error => {});
});
