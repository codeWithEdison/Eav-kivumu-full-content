// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Balance{
    int bal;
    // constructor to initialize the balance
    constructor(){
        bal = 10;
    }
    // function to return amaount of this contact
    function getBalance() public  view  returns (int){
        return bal;
    }

// function to withdraw a specific amount from balance

function withdraw(int amt) public {
    require(amt <= bal, "insuffient balance ");
    bal = bal - amt;
} 
// function to depositi a specific amount into balance

function deposit(int amt) public {
    bal = bal + amt;
    // bal += amt;
}
}