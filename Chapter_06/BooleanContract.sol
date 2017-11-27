pragma solidity ^0.4.0;

contract BooleanContract {

bool switcher;

  function flipSwitch() public {
      switcher = !switcher;
  }


  function switchState() public constant returns (bool) {
      return switcher;
  }

}
