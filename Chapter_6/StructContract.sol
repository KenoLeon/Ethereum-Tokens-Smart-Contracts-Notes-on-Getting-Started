pragma solidity ^0.4.0;
contract StructContract {
  struct Stuff {
            address addr;
            uint[] someNumbers;
        }
  Stuff myStuff;
  Stuff otherPeoplesStuff;
  function StructContract() public{
      myStuff.addr = msg.sender;
      myStuff.someNumbers = [20,30,40];
      otherPeoplesStuff.addr = msg.sender;
      otherPeoplesStuff.someNumbers = [22,33,44];
  }
  function getMyStuff() public view returns (address, uint){
    return (myStuff.addr, myStuff.someNumbers[1]);
  }
  function getOthersStuff() public view returns (address, uint){
      return (otherPeoplesStuff.addr, otherPeoplesStuff.someNumbers[0]);
  }
}
