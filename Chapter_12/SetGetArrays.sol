pragma solidity ^0.4.0;
contract SetGetArrays {
 uint[] someNumbers;
 uint[] moreNumbers;
 function getArray1() public constant returns (uint[]) {
         return someNumbers;
 }
 function getArray2() public constant returns (uint[]) {
         return moreNumbers;
 }
 function setArrays(uint[] setNumbers, uint[] moreSetNumbers) public  {
  someNumbers = setNumbers;
  moreNumbers = moreSetNumbers;
 }
}
