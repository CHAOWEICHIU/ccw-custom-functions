const expect = require('chai').expect
 	, mutation = require('../../lib/custom_functions/mutation')

describe('mutation()', ()=>{
	it('eqation check', ()=>{
		expect(mutation(["hello", "hey"])).to.equal(false)
		expect(mutation(["hello", "Hello"])).to.equal(true)
		expect(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])).to.equal(true)
		expect(mutation(["Mary", "Army"])).to.equal(true)
		expect(mutation(["Mary", "Aarmy"])).to.equal(true)
		expect(mutation(["Alien", "line"])).to.equal(true)
		expect(mutation(["floor", "for"])).to.equal(true)
	})
})

