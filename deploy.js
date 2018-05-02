
const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require('web3');
const {interface, bytecode } = require('./compile');

console.log(interface);
console.log(bytecode);
console.log('A........................');
console.log(HDWalletProvider);

//Wallet mnemonic + network
const mnemonic = "miracle vanish dice sight dose reveal curve vault three fringe nurse buzz";
const network = "https://rinkeby.infura.io/dRMvlwMXOYCMdB4fOJeP"
console.log('1........................');
console.log(mnemonic);
console.log(network);
console.log('2........................');
const provider = new HDWalletProvider( mnemonic, network);

console.log('3........................');
console.log(provider);
console.log('4........................');

const web3 = new Web3(provider);

const deploy = async () => {
	console.log('inside deploy')
	const accounts = await web3.eth.getAccounts();

	console.log('attempting to deploy from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy ({ data: bytecode, arguments: ['hello!']})
		.send ({ gas: '100000', from: accounts[0] });

	console.log('contract deployed to', result.options.address);
};