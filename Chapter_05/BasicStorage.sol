pragma solidity ^0.4.0;
contract BasicStorage {
    uint storedData;
function set(uint x) public {
        storedData = x;
    }
function get() public constant returns (uint) {
        return storedData;
    }
}
