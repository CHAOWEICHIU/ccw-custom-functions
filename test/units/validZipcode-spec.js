const expect = require('chai').expect
	, validZipcode = require('../../lib/custom_functions/validZipcode')

describe('validZipcode', ()=>{
	it('should return true', ()=>{
		expect(validZipcode('48326')).to.equal(true)
		expect(validZipcode(48326)).to.equal(true)		
		expect(validZipcode('48326 ')).to.equal(true)		
	})
	it('should return false', ()=>{
		expect(validZipcode('4832')).to.equal(false)	
		expect(validZipcode(4832)).to.equal(false)	
		expect(validZipcode('aaaas')).to.equal(false)	
		expect(validZipcode('1aaas')).to.equal(false)
		expect(validZipcode('1aaas')).to.equal(false)
		expect(validZipcode('8391a')).to.equal(false)
	})

})