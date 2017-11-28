pragma solidity ^0.4.0;
contract Airdrop {
  function drop(ERC20 token, address[] recipients, uint256[] values) public {
    for (uint256 i = 0; i < recipients.length; i++) {
      token.transfer(recipients[i], values[i]);
    }
  }
}

/*Not a complete example, you would need to inherit or inc  lude the ERC20*/
