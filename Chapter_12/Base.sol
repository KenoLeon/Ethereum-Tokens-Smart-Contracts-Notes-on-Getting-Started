pragma solidity ^0.4.0;
contract Base {

    uint number = 72;

    function getNumber() view public returns (uint){
        return number;
    }

}
