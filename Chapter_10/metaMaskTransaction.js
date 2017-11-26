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

  const coinbase = '0xbfca6ECdcB1a21d99bEfeA4Fd8CDE79Bc81e2c57';
  const tokenAccount = '0xCCeEF52Df5Ff1B80e63E3f211021bd0bAe5323D6';
  const eth = new Eth(window.web3.currentProvider);
  // not meant for production since it would fire every time you load the page...
  eth
    .sendTransaction({
      from: coinbase,
      to: tokenAccount,
      value: Eth.toWei(0.05, 'ether'),
      gas: '3000000',
      data: '0x',
    })
    .then(result => {
      console.log("Tx:" + result);
    })
    .catch(error => {});
});
