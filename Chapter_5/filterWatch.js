console.log('Setting up...');
const solc = require('solc');
const Web3 = require('web3');
console.log('Connecting');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
filter = web3.eth.filter('latest'); // filter can be 'latest' or 'pending' check :
console.log('Watching');
filter.watch(function(error, result) {
      console.log(result);
    });
