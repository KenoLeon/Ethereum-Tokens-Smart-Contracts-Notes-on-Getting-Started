pragma solidity ^ 0.4.0;
contract TipJar {

  address private owner;

  modifier onlyOwner {
    require(msg.sender == owner);
    _;
  }

  function TipJar() internal {
    owner = msg.sender;
  }

  function() public payable {}

  function collect(uint256 amount) onlyOwner public {
    msg.sender.transfer(amount);
  }
}
