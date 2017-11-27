console.log('Setting up...');
const solc = require ('solc');
const Web3 = require ('web3');
console.log('Reading abi');
const contractABI = require("./basicStorageEv.json");
console.log('Connecting');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log('Creating contract instance');
const basicStorageEv = web3.eth.contract(contractABI);
var basicStorageEvI = basicStorageEv.at("0xc78ccc2a6c2b1f9aafad8ccf902ae310ec9a98d9");
var myEvent = basicStorageEvI.SetEvent({}, {fromBlock: 0, toBlock: 'latest'});
console.log("Start watching events");
myFilteredEvent.watch(function(error, result){
    if (!error) {
        console.log(result);
    } else {
        console.log(error);
    }
});
