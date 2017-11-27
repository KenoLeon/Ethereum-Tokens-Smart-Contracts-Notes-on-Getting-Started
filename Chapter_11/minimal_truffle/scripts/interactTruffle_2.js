module.exports = function(callback) {

  var account = "0xf8c09220dfc59e74727c9db4d58df8ae120d2e93";
  var basicStorage = artifacts.require("basicStorage");
  var contractInstance = basicStorage.at("0x27974f214310b7977492396f981a93c930297f81");

  contractInstance.set.sendTransaction(10, {
    from: account
  }).then(function(result) {
    console.log(result);
    // tx : 0x5d899a8a22b4a1599728c6b3fb772d64492f6a94d78365ef88330fb910f06bed
    contractInstance.get.call().then(function(result){
      console.log(result);
    // { [String: '10'] s: 1, e: 1, c: [ 10 ] }
    });
  });
}
