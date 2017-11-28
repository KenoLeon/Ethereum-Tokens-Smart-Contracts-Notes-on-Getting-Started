
pragma solidity ^0.4.0;
contract Withdrawable {
    mapping(address => uint) pendingWithdrawals;

function withdraw() public {
        uint amount = pendingWithdrawals[msg.sender];
        pendingWithdrawals[msg.sender] = 0;
        msg.sender.transfer(amount);
    }
  }
