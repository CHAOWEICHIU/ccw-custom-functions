// const expect = require('chai').expect

function largestAmong(arr) {
  var biggestNumInEachArray = arr.map(function(item){
  	return Math.max.apply(null, item);
  })

  return biggestNumInEachArray;  
}


// largestAmong([[1,2], [3,4]])
// describe('largestAmong', ()=>{

// 	// it('should return array',()=>{
// 	// 	expect(typeof largestAmong([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])).to.equal('array')
// 	// })
// 	// it('should return largest',()=>{
// 	// 	expect(largestAmong([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])).to.equal([27,5,39,1001])
// 	// })
// })


