const expect = require('chai').expect


function getIndexToIns(arr, goal) {
	var sortedArray = arr.sort(function(a,b){return a-b})
	
	if(sortedArray.indexOf(goal)!==-1)return sortedArray.indexOf(goal)
	
	if(sortedArray[sortedArray.length-1] < goal) return sortedArray.length
	
	var indexForTarget =  sortedArray.reduce(function(prev, curr){
  		return (Math.abs(curr - goal) <= Math.abs(prev - goal) ? curr : prev)
	})
	return sortedArray.indexOf(indexForTarget)


}

getIndexToIns([40, 60], 50);


describe('getIndexToIns()', ()=>{
	it('(1) One of nums in array matchs target ', ()=>{
		expect(getIndexToIns([10, 20, 30, 40, 50], 30)).to.equal(2)
	})
	it('(2) Find the closet num', ()=>{
		expect(getIndexToIns([2, 20, 10], 19)).to.equal(2)
		
	})
	it('(3) return bigger number if the distance from two number are the same', ()=>{
		expect(getIndexToIns([40, 60], 50)).to.equal(1)
	})
	it('(4) goal is bigger than any number in array', ()=>{
		expect(getIndexToIns([2, 5, 10], 15)).to.equal(3)
	})
})






