const expect = require('chai').expect
	, plus = require('../../lib/custom_functions/plus')

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