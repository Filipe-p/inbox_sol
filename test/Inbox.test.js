const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //constructrer 

const web3 = new Web3(ganache.provider()); // connecting to network

// it - Rrun a testes and makes asserctions
// describe - Groups together 'it functions'
// beforeEach - iniciates something before testes

// Learning how to use mocha with simple test
class Car {
	park() {
		return 'stopped';
	}

	drive() {
		return 'vroom';
	}
}

//Refactor code to use beforeEach

let car; //car is undefined

beforeEach(() => {
	car = new Car(); // car becomes a new Car object
});

// //now lest use actual mocha and assert libraries

describe('Car class methods', () => {
	it('Can park, returning string stopped', () => {
		// const car = new Car;
		assert.equal(car.park(), 'stopped');
	});

	it('Can drive, returning string vroom', () => {
		//const car = new Car;
		assert.equal(car.drive(), 'vroom');
	})
});



// testing a solidity contract


// deploy new contract - common starter logic
















