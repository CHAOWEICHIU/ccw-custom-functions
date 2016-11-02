const expect = require('chai').expect




describe('destroyer()', ()=>{
	it('equation check', ()=>{
		expect(destroyer([1, 2, 1], 2)).to.equal([1,1])
		expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).to.equal([1])
	})
})




 