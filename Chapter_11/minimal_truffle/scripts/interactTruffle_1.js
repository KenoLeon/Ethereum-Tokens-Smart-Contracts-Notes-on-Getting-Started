module.exports = function(callback) {
var basicStorage = artifacts.require("basicStorage");
basicStorage.deployed().then(function(instance) {
    contract = instance;
    console.log(contract);
  })
}
// Note: the artifacts line, in Truffles parlance it is a contract abstraction and it encapsulates your contract for use within Truffles framework, the equivalent of instantiating a contract with an ABI and/or Bytecode in web3,for an in depth look and extra features check out truffle-contract ( the abstraction module )
