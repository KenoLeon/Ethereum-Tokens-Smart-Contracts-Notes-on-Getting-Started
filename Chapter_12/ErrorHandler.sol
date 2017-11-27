pragma solidity ^0.4.0;
contract ErrorHandler {
    uint hundred = 100;
    uint ten = 10;
    uint[] testvals = [0,1,2,3];
    
   function testAssert() public view returns (uint) {
        assert(hundred > ten);
        return testvals[1];
    }

    function testRequire() public view returns (uint) {
        require(hundred > ten);
        return testvals[2];
    }
}
