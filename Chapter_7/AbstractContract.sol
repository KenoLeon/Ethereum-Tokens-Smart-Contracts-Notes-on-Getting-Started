pragma solidity ^0.4.0;
contract AnimalContract {
  function doSomething()public returns (bytes32);
}
contract DogContract is AnimalContract {
  function doSomething() public returns (bytes32){
    return "eat, sleep, woofs";
  }
}
contract CatContract is AnimalContract {
  function doSomething() public returns (bytes32){
    return "eat, sleep, meows";
  }
}
