
const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require('web3');
const {interface, bytecode } = require('./compile');

//Wallet mnemonic + network
// DO NOT PUT YOUR REAL ACCOUNT HERE
const mnemonic = "miracle vanish dice sight dose reveal curve vault three fringe nurse buzz";
const network = "https://rinkeby.infura.io/dRMvlwMXOYCMdB4fOJeP"
const provider = new HDWalletProvider(mnemonic, network);

// console.log(provider);

const web3 = new Web3(provider);

// console.log(web3);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('attempting to deploy from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy ({ data: bytecode, arguments: ['hello!']})
		.send ({ from: accounts[0], gas: 1000000});

	console.log('contract deployed to', result.options.address);
};

deploy();