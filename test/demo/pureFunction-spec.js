const expect = require('chai').expect 

// ----------------------------------------------------
// 
//
// 
var Bank = function(balance){
	this.balance = balance
}

Bank.prototype.withdraw = function(amount){
	this.balance -= amount
	return this.balance
}

var myBank = new Bank(500)

var withdraw1 = myBank.withdraw(100)
var withdraw2 = myBank.withdraw(100)

describe('myBank', ()=>{
	it('withdraw1-> 400, withdraw2 ->300', ()=>{
		expect(withdraw1).to.equal(400)
		expect(withdraw2).to.equal(300)
	}) 
})
// 
// 
// this is like you are going to ATM, you would get
// how much you current have in your bank account
//              
// ----------------------------------------------------





// ----------------------------------------------------
//                functional manner 
// 
// 
var PureBank = function(balance){
	this.balance = balance
}

PureBank.prototype.withdraw = function(amount){
	return new PureBank ( this.balance - amount )
}

var myPureBank = new PureBank(500)
var myPureBankWithdraw1 = myPureBank.withdraw(100)
var myPureBankWithdraw2 = myPureBank.withdraw(100)


describe('Pure Bank',()=>{
	it('myPureBankWithdraw1 and 2-> 400', ()=>{
		expect(myPureBankWithdraw1.balance).to.equal(400)
		expect(myPureBankWithdraw2.balance).to.equal(400)
	})
	it('myPureBankWithdraw3 -> 300', ()=>{
		var myPureBankWithdraw3 = myPureBankWithdraw1.withdraw(100)
		expect(myPureBankWithdraw3.balance).to.equal(300)
	})
})

// 
// 
// This is like you would get a history of your bank 
// account at the end of each month
// 
// ----------------------------------------------------



// source: https://github.com/ChetHarrison/A-Gentle-Introduction-to-Functional-JavaScript