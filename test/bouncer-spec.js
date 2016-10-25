const expect = require('chai').expect



function bouncer(arr) {
  return arr.filter((item)=>{
  	return Boolean(item) !== false
  })
}



describe('bouncer', ()=>{
	it('equation check', ()=>{
		expect(bouncer([7, "ate", "", false, 9])).to.equal([7, "ate", 9])
		expect(bouncer(["a", "b", "c"])).to.equal(["a", "b", "c"])
		expect(bouncer([false, null, 0, NaN, undefined, ""])).to.equal([])
	})
})