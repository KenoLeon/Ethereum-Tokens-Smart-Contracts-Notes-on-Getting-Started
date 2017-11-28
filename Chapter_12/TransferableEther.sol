pragma solidity ^0.4.0;
contract TransferableEther{
address owner;
function TransferableEther() public{
        owner = msg.sender;
    }
function transferEther(address forwardAddress, uint amount) public {
        require(msg.sender == owner);
        forwardAddress.transfer(amount);
}
function () public payable {}
}
