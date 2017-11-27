pragma solidity ^0.4.0;
contract ArrayContract {
uint[] someNumbers = [10,13,14];
function getArray() public constant returns (uint) {
        return someNumbers[1];
  }
}
