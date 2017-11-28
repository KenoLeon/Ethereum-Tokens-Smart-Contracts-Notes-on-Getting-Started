pragma solidity ^0.4.0;
import "./Base.sol";
contract A {

 function getNumberAddress(address keyAddress) public constant returns (uint) {
        Base baseInstance = Base(keyAddress);
        return baseInstance.getNumber();
    }
}
