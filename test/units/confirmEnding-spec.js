const expect = require('chai').expect
	, confirmEnding = require('../../lib/custom_functions/confirmEnding')


describe('confirmEnding', ()=>{
	it('(1)', ()=>{
		expect(confirmEnding("Bastian", "n")).to.equal(true)
		expect(confirmEnding("Connor", "n")).to.equal(false)
	})
	it('(2)', ()=>{
		expect(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")).to.equal(false)
	})
	it('(3)', ()=>{
		expect(confirmEnding("He has to give me a new name", "name")).to.equal(true)
	})
	it('(4)', ()=>{
		expect(confirmEnding("Open sesame", "same")).to.equal(true)
		expect(confirmEnding("Open sesame", "pen")).to.equal(false)
		expect(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")).to.equal(false)
	})
	
})