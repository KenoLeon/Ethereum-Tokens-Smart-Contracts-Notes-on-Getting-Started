pragma solidity ^0.4.0;
interface AnimalContract {
  function doSomething() public constant returns (bytes32);
  function isAlive() public constant returns (bool);
}
contract DogContract is AnimalContract {
  function doSomething()public constant returns (bytes32){
    return "eat, sleep, woofs";
  }
  function isAlive()public constant returns (bool){
    return true;
  }
}
contract CatContract is AnimalContract {
  function doSomething()public constant returns (bytes32){
    return "eat, sleep, meows";
  }
  function isAlive()public constant returns (bool){
    return true;
  }
}
