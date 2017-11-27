pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/basicStorage.sol";

contract TestbasicStorage {

 basicStorage bs = new basicStorage();

  function testInitialBalance() {
      Assert.balanceIsZero(bs, 'Assert failed');
    }

}
