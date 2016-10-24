const expect = require('chai').expect

function repeatStringNumTimes(str, num) {
  var result = ''
  if(num < 0) return result

  for(var i = 0; i < num; i++){
  		result += str	
  }
  return result
  
}




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