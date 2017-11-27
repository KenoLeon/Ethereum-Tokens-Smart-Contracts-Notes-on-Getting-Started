pragma solidity ^0.4.0;
contract ERC20 {
 function totalSupply() constant returns (uint totalSupply);
 function balanceOf(address _owner) constant returns (uint balance);
 function transfer(address _to, uint _value) returns (bool success);
 function transferFrom(address _from, address _to, uint _value) returns (bool success);
 function approve(address _spender, uint _value) returns (bool success);
 function allowance(address _owner, address _spender) constant returns (uint remaining);
// events:
 event Transfer(address indexed _from, address indexed _to, uint _value);
 event Approval(address indexed _owner, address indexed _spender, uint _value);
// optional token information:
string public constant name = "Token Name";
string public constant symbol = "SYM";
 uint8 public constant decimals = 18;
}
