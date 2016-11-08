const expect = require('chai').expect

let input = [
	{key:'name', value: 'cw'},
	{key:'age', value: 27},
	{key:'height', value: 176},
	{key:'food', value: 'apple'},
	{key:'food', value: 'orange'},
	{key:'food', value: 'strawberry'}
]

let output = {
	name: 'cw',
	age: 27,
	height: 176,
	food: [
		'apple',
		'orange',
		'strawberry'
	]
}

let magicOperation = function(input){
	return input
		.map(({key,value})=>( {[key]:value}))
		.reduce((acc, curr, index)=>{
			let key = Object.keys(curr)[0]
			
			if(!acc[key]){
				acc[key] = curr[key]
				return acc
			} else {
				// turn string into array
				acc[key] = [].concat(acc[key]).concat(curr[key])
				return acc
			}

		}, {})
}

describe('exercise 2', ()=>{
	it('check', ()=>{
		expect(magicOperation(input)).to.eql(output)
	})
})