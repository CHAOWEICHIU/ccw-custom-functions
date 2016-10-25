const expect = require('chai').expect

function destroyer(arr, arg1, arg2, arg3) {
  
  return arr.filter(function(num){
  	return num !== arg1
  }).filter(function(num){
  	return num !== arg2
  }).filter(function(num){
  	return num !== arg3
  })

}


describe('destroyer()', ()=>{
	it('equation check', ()=>{
		expect(destroyer([1, 2, 1], 2)).to.equal([1,1])
		expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).to.equal([1])
	})
})




 