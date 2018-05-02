
//MOCHA
// it - Rrun a testes and makes asserctions it(descriptive_message, a_block{})
// describe - Groups together 'it functions' 
//   describe(descriptive_message, a_block{
//	    it(descriptive_message, a_block{})
//   })
// beforeEach - iniciates something before testes

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //constructrer 
const web3 = new Web3(ganache.provider()); // connecting to network
const {interface, bytecode} = require('../compile');

let accounts
let inbox

//inputs
let initialDefaultMessage = 'Hi there!'
let messageToSet = 'Good bye!'

beforeEach(async () => { 
	// ganache has unclocked account created
	// use web3 library to get a list of all accounts
	accounts = await web3.eth.getAccounts();

	//use one of the accounts to deploy the Contract
	inbox = await new web3.eth.Contract(JSON.parse(interface))
	.deploy({ data: bytecode, arguments:[initialDefaultMessage]})
	.send({ from: accounts[0], gas: '1000000'});
});

describe('Inbox', () => {
	it('deploys a contract', () => {
		assert.ok(inbox.options.address); //checks if a defined value
	});
	it("has a default message", async () =>{
		const message = await inbox.methods.message().call(); //call if you want to make a different call like a transaction and send gas
		assert.equal(message, initialDefaultMessage);
	});
	it('can change a message', async () => {
		await inbox.methods.setMesssage(messageToSet).send( { from: accounts[0] });
		const message = await inbox.methods.message().call();
		assert.equal(message, messageToSet);
	});
});




// // Learning how to use mocha with simple test
// class Car {
// 	park() {
// 		return 'stopped';
// 	}

// 	drive() {
// 		return 'vroom';
// 	}
// }

// //Refactor code to use beforeEach

// let car; //car is undefined

// beforeEach(() => {
// 	car = new Car(); // car becomes a new Car object
// });

// //now lest use actual mocha and assert libraries

// describe('Car class methods', () => {
// 	it('Can park, returning string stopped', () => {
// 		// const car = new Car;
// 		assert.equal(car.park(), 'stopped');
// 	});

// 	it('Can drive, returning string vroom', () => {
// 		//const car = new Car;
// 		assert.equal(car.drive(), 'vroom');
// 	})
// });



// Testing a solidity contract

//SUDO
//1) deploy new contract to our genache local network - common starter logic - beforeEach
//2.a) make changes to contract or use the contract
//2.b) assert if it makes the changes
