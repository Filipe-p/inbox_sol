
//MOCHA
// it - Rrun a testes and makes asserctions
// describe - Groups together 'it functions'
// beforeEach - iniciates something before testes

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //constructrer 

const web3 = new Web3(ganache.provider()); // connecting to network

beforeEach(() => { 
	// ganache has unclocked account created
	// use web3 library to get a list of all accounts
	web3.eth.getAccounts()
	.then(examples1 => {
		console.log(examples1);
	});
});

describe('Inbox - Web3 and  ganache', () => {
	it('deploys a contract', () => {});
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


















