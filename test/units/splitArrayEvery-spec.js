const expect = require('chai').expect
	, splitArrayEvery = require('../../lib/custom_functions/splitArrayEvery')




describe('splitArray()', ()=>{
	it('check 1', ()=>{
		expect(splitArrayEvery(2,[1,2,3,4])).to.eql([[1,2],[3,4]])
	})
	it('check 2', ()=>{
		expect(splitArrayEvery(3,[1,2,3,4])).to.eql([[1,2,3],[4]])
	})
	it('check 3', ()=>{
		expect(splitArrayEvery(4,[1,2,3,4,'',6])).to.eql([[1,2,3,4],['',6]])	
	})
})