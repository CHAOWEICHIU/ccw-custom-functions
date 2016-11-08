const expect = require('chai').expect
	, _ = require('lodash')

let input = [
	{key:'name', value: 'cw'},
	{key:'age', value: 27},
	{key:'height', value: 176},
	{key:'garbageA', value: 'valueA'},
	{key:'garbageB', value: 'ValueB'}
]

let output = {
	name: 'cw',
	age: 27,
	height: 176
}

var removeObjKeyHasValueOf = _.curry(function(attribute, obj){
	return obj.key !== attribute
})


function magicOperation(input){
	return input
		.filter(removeObjKeyHasValueOf('garbageA'))
		.filter(removeObjKeyHasValueOf('garbageB'))
		.reduce((acc, curr, index)=>{
			acc[curr.key] = curr.value
			return acc
		}, {})
}

describe('practice', ()=>{
	it('pass', ()=>{
		expect(magicOperation(input)).to.eql(output)
	})
})