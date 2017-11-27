module.exports = function(callback) {

  var account = "0xc9b3bb2bd6d3ebd4ebf9816052cd84da5c61c116";
  var basicStorage = artifacts.require("basicStorage");
  var contractInstance = basicStorage.at("0xe32d1865f5e37a20b4b3cf3939cc247a27ff302d");

  contractInstance.set.sendTransaction(10, {
    from: account
  }).then
    contractInstance.get.call().then(function(result){
      console.log(result);
  }).then
  contractInstance.set.sendTransaction(20, {
    from: account
  }).then
    contractInstance.get.call().then(function(result){
      console.log(result);
  }).then
  contractInstance.set.sendTransaction(30, {
    from: account
  }).then
    contractInstance.get.call().then(function(result){
      console.log(result);
  });
}
