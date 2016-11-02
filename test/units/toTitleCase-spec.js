const expect = require('chai').expect
	, toTitleCase = require('../../lib/custom_functions/toTitleCase')


describe('custom functions', ()=>{
	var greetingString = 'HOw aRe YOU ? dd dasl ?dd'
	it('toTitleCase()', ()=>{
		expect(typeof toTitleCase("I'm a little tea pot")).to.equal('string')
		expect(toTitleCase("I'm a little tea pot")).to.equal("I'm A Little Tea Pot")
		expect(toTitleCase("sHoRt AnD sToUt")).to.equal("Short And Stout")
		expect(toTitleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).to.equal("Here Is My Handle Here Is My Spout")
		expect(toTitleCase(greetingString)).to.equal('How Are You ? Dd Dasl ?dd')
	})
})