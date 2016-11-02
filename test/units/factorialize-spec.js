const expect = require('chai').expect
	, factorialize = require('../../lib/custom_functions/factorialize')


describe('factorialize', ()=>{
	it('should pass', ()=>{
		expect(factorialize(5)).to.equal(120)
		expect(factorialize(10)).to.equal(3628800)
		expect(factorialize(20)).to.equal(2432902008176640000)
		expect(factorialize(0)).to.equal(1)
		
	})
})

