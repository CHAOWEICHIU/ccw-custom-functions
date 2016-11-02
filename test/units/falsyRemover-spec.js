const expect = require('chai').expect
	, falsyRemover = require('../../lib/custom_functions/falsyRemover')

describe('falsyRemover', ()=>{
	it('equation check', ()=>{
		expect(falsyRemover([7, "ate", "", false, 9])).to.eql([7, "ate", 9])
		expect(falsyRemover(["a", "b", "c"])).to.eql(["a", "b", "c"])
		expect(falsyRemover([false, null, 0, NaN, undefined, ""])).to.eql([])
	})
})