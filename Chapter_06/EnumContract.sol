pragma solidity ^0.4.0;
contract EnumContract {

enum someThings { CHAIR, CAR, TREE, COFFEE }

someThings constant favoriteThing = someThings.COFFEE;


function getFavoriteThing() public pure returns (uint) {
      return uint (favoriteThing);
  }
}
