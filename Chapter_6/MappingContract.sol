pragma solidity ^0.4.0;
contract MappingContract {
mapping(uint => uint[]) luckyNumbers;
function MappingContract() public{
    luckyNumbers[1] =  [10,20,30];
    luckyNumbers[2] = [11,22,33];
    luckyNumbers[3] = [101,202,303];
  }
function getLucky(uint luckyKey) public constant returns (uint[]){
    return luckyNumbers[luckyKey];
  }
}
