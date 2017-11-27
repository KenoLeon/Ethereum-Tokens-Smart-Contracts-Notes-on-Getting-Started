pragma solidity ^0.4.0;
contract Numbers {
    uint number1 = 1;
    uint public number2 = 2;
    uint private number3 = 3;
    uint internal number4 = 4;
  }
contract MyNumber is Numbers{
  function listNumber() returns (uint){
          // return number1; // 1
          // return number2; // 2
          // return number3;  unexpected identifier
          // return number4; // 4
  }
}

/*contract MyNumber is Numbers{
  function listNumber() returns (uint){
     return numbers.number1; // 1
  }
}*/
