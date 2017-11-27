var basicStorage = artifacts.require("basicStorage");
var testValue = 10;

contract('basicStorage', function(accounts) {

  it("set & get methods should work", function() {
    return basicStorage.deployed().then(function(instance) {
      return instance.set.sendTransaction(testValue, {
        from: accounts[0]
      }).then(function() {
        return instance.get.call().then(function(result) {
          assert(result == testValue, 'get value is not set value');
        });
      });
    });
  });
});


// Silly Test:

// var song = '';
// // var song = 'la la la';
// contract('basicStorage', function() {
//   it("should sing you a song !", function() {
//     assert(song !== '', 'I have no song');
//   })
// });
