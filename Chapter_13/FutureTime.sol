pragma solidity ^0.4.0;
contract FutureTime {
    function getNow() public constant returns (uint) {
        return now;
    }
    function getDayAfter() public constant returns (uint) {
        return now + 1 days;
    }
    function getWeekAfter() public constant returns (uint) {
        return now + 1 weeks;
    }
}
