pragma solidity ^0.4.0;
contract TimeGetter {

    function getBlockTime() public constant returns (uint) {
        return block.timestamp;
    }

    function getNow() public constant returns (uint) {
        return now; // an alias for block.timestamp
    }
}
