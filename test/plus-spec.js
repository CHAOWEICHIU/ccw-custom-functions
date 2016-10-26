const expect = require('chai').expect;

function plus(){
	let sum = 0
	for(var i = 0; i < arguments.length; i ++){
		sum += arguments[i]
	}
	return sum
}

describe('plus()', ()=>{
	it('with 2 arguments', ()=>{
		expect(plus(2,2)).to.equal(4)
	})
	it('with 4 arguments', ()=>{
		expect(plus(2,2,3,3)).to.equal(10)
	})
	it('with 6 arguments', ()=>{
		expect(plus(2,2,3,3,10,10)).to.equal(30)
	})
})