pragma solidity ^0.4.0;
contract AnimalContract {
  function doSomething() public constant returns (bytes32) {
    return "eat, sleep";
  }
}
contract CatContract is AnimalContract{}
