pragma solidity ^0.4.0;
contract Seasons {
  string color;
  address owner;

  function Seasons() public {
      owner = msg.sender;

  }
function seasonColor() view public returns(string) {
     return color;
 }
 
 function setSeasonColor(string newSeasonColor) public{
     require(msg.sender == owner);
     color = newSeasonColor;
 }
}
