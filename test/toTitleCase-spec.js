var expect = require('chai').expect
var toTitleCase = require('../toTitleCase')


describe('custom functions', ()=>{
	var greetingString = 'HOw aRe YOU ? dd dasl ?dd'
	it('toTitleCase()', ()=>{
		expect(toTitleCase(greetingString)).to.equal('How Are You ? Dd Dasl ?dd')
	})
})