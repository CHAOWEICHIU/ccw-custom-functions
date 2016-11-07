const expect = require('chai').expect
	, filterWords = require('../../lib/custom_functions/filterWords')


describe('curry', ()=>{
	it('check 1', ()=>{
		let thingsToFilter = 'this is a test of rock'
		let wordsToRemove = ['is', 'a', 'of']
		expect(filterWords(thingsToFilter, wordsToRemove)).to.equal('this test rock')
	})
})