// Include ethjs.ethjs.
// Run with MetaMask.
// Run with Babel / es6

let tokenABI = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_spender", type: "address" },
      { name: "_amount", type: "uint256" }
    ],
    name: "approve",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_from", type: "address" },
      { name: "_to", type: "address" },
      { name: "_amount", type: "uint256" }
    ],
    name: "transferFrom",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "rate",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "beneficiary", type: "address" }],
    name: "create",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_to", type: "address" },
      { name: "_amount", type: "uint256" }
    ],
    name: "transfer",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "amount", type: "uint256" }],
    name: "collect",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      { name: "_owner", type: "address" },
      { name: "_spender", type: "address" }
    ],
    name: "allowance",
    outputs: [{ name: "remaining", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  { payable: true, stateMutability: "payable", type: "fallback" },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_from", type: "address" },
      { indexed: true, name: "_to", type: "address" },
      { indexed: false, name: "_value", type: "uint256" }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_owner", type: "address" },
      { indexed: true, name: "_spender", type: "address" },
      { indexed: false, name: "_value", type: "uint256" }
    ],
    name: "Approval",
    type: "event"
  }
];
let tokenAddress = "0xCCeEF52Df5Ff1B80e63E3f211021bd0bAe5323D6";
let token;

$("#mmAlert").hide();
$("#txSuccess").hide();

// Connect to MetaMask :
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
  Dapp();
});

function Dapp() {
  // Init eth:
  const eth = new Eth(window.web3.currentProvider);
  const token = eth.contract(tokenABI).at(tokenAddress);
  // Are we logged into MetaMask :
  window.web3.eth.getAccounts(function(err, accounts) {
    if (err != null) console.error("An error occurred: " + err);
    else if (accounts.length == 0) {
      $("#mmAlert").show();
      // Prompting for reload, but ideally you should check for account changes
    } else {
      console.log("User is logged in to MetaMask");
      $("#mmAlert").hide();
    }
  });

  // Coinbase Account balance:
  eth
    .coinbase()
    .then(coinbase => eth.getBalance(coinbase))
    .then(
      balance =>
        (document.getElementById("accountBalance").innerHTML = Eth.fromWei(
          balance,
          "ether"
        ))
    )
    .catch(error => {});

  // BLIPS supply:

  token.totalSupply().then(function(supply) {
    document.getElementById("supply").innerHTML = supply[0];
  });

  // BLIPS Balance:
  eth
    .coinbase()
    .then(coinbase => token.balanceOf(coinbase))
    .then(
      balance =>
        (document.getElementById("blipsBalance").innerHTML = balance[0])
    )
    .catch(error => {});
}

// Get Some BLIPS ! // vanilla JS...
document.getElementById("buy").onclick = function(e) {
  e.preventDefault();
  var eth = document.getElementById("amount").value;

  // Note: Offloading balance validation to metaMask,
  // but ideally you should also validate here
  // Against Balance.
  // Some basic number validation...

  if ($.isNumeric(eth) && eth > 0) {
    $("#amount").removeClass("is-invalid");
    getBlips(eth);
  } else {
    $("#amount").addClass("is-invalid");
  }
};
// Jquery ...
$("#reload").click(function() {
  Dapp();
});

function getBlips(amount) {
  console.log("Will try to exchange" + amount + "for Blips");
  const eth = new Eth(window.web3.currentProvider);
  eth
    .coinbase()
    .then(function(coinbase) {
      eth
        .sendTransaction({
          from: coinbase,
          to: tokenAddress,
          value: Eth.toWei(amount, "ether"),
          gas: "3000000",
          data: "0x"
        })
        .then(result => {
          console.log("Tx:" + result);
          $("#receipt").html(
            '<a href="https://kovan.etherscan.io/tx/' +
              result +
              '" target="_blank">' +
              result +
              "</a>"
          );
          $();
          $("#txSuccess").show();
        });
    })
    .catch(error => {});
}
