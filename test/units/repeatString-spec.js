const expect = require('chai').expect
	, repeatStringNumTimes = require('../../lib/custom_functions/repeatString')

describe('repeatStringNumTimes()', ()=>{
	it('equation checking', ()=>{
		expect(repeatStringNumTimes("abc", 3)).to.equal('abcabcabc')
		expect(repeatStringNumTimes("*", 3)).to.equal('***')
		expect(repeatStringNumTimes("abc", 1)).to.equal('abc')
		expect(repeatStringNumTimes("*", 8)).to.equal('********')
	})
	it('should return nothing if num is < 0', ()=>{
		expect(repeatStringNumTimes("abc", -2)).to.equal('')
	})
})