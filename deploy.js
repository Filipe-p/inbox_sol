
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode } = require('./compile');

console.log(interface);
console.log(bytecode);

const provider = new HDWalletProvider(
	'miracle vanish dice sight dose reveal curve vault three fringe nurse buzz',
	'https://rinkeby.infura.io/dRMvlwMXOYCMdB4fOJeP'
);

console.log('........................');
console.log(provider);
console.log('........................');

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('attempting to deploy from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy ({ data: bytecode, arguments: ['hello!']})
		.send ({ gas: '100000', from: accounts[0] });

	console.log('contract deployed to', result.options.address);
};