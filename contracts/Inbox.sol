pragma solidity ^0.4.21;

contract Inbox {
    string public message;
    
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    
    function setMesssage(string newMessage) public {
        message = newMessage;
    }
    //function getMesssage() public view returns (string) {
    //    return message;
    //}
}