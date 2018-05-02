//bad// require ('./contracts/Inbox.sol'); //not requesting js code

//right way
const path = require('path'); // for cross platform compatibility
const fs = require('fs');
const solc = require('solc');

//building path	// inbox_sol / contracts / inbox.sol 
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
//reading raw source code
const source = fs.readFileSync(inboxPath, 'utf8'); 


//console.log(solc.compile(source), 1); // 1 is for the number of contracts being compiled
//module export makes the hash objects inside :inbox, such as the value of srcmap or bytecode accessible as a variable
//console.log(solc.compile(source, 1).contracts[':Inbox']);
module.exports = solc.compile(source, 1).contracts[':Inbox'];

