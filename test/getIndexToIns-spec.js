const expect = require('chai').expect

var speak = function(things, d){
	console.log(things)
	
	console.log(this)
}
var sayThings = {name: 'CW', age: 22}
var sayThing = {height:177}
speak.call(sayThings, ['dd', 'gg'])

// function getIndexToIns(arr, goal) {
// 	console.log(arguments)
// 	let sortedArray = arr.sort(function(a,b){return a-b})


//  	if(sortedArray.indexOf(goal) !== -1)return sortedArray.indexOf(goal)

//  	var n = sortedArray.reduce(function (prev, curr) {
//   		return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev)
// 	})
	
// 	console.log(n)
// 	return sortedArray.indexOf(n) + 1


// }

// getIndexToIns([40, 60], 50);


// describe('getIndexToIns()', ()=>{
// 	it('(1)', ()=>{
// 		expect(getIndexToIns([10, 20, 30, 40, 50], 35)).to.equal(3)
// 		expect(getIndexToIns([40, 60], 50)).to.equal(1)
// 		expect(getIndexToIns([3, 10, 5], 3)).to.equal(0)
// 	})
// 	it.only('(2)', ()=>{
// 		expect(getIndexToIns([10, 20, 30, 40, 50], 30)).to.equal(2)
// 		expect(getIndexToIns([2, 20, 10], 19)).to.equal(2)
// 	})
// 	it('(3)', ()=>{
// 		expect(getIndexToIns([5, 3, 20, 3], 5)).to.equal(2)
// 	})
// })
