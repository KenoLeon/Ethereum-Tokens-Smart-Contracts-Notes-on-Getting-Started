pragma solidity ^0.4.0;
contract ConstructorContract {
address father;
function ConstructorContract() public{
  father = msg.sender;
 }
function whosyourfather() public constant returns (address) {
      return father;
  }
}
