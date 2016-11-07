'use strict'
const expect = require('chai').expect
	, compose = require('../../lib/custom_functions/composeExample')


function doubleFn(x){
	return x *2
}
function squareFn(x){
	return x * x
}
function plus100(x){
	return x += 100
}


describe('compose', ()=>{
	it('check 1', ()=>{
		let doubleTheSquare = compose(doubleFn, squareFn)
		expect(doubleTheSquare(5)).to.equal(100)
	})
	it('check 2', ()=>{
		let magicOperation = compose(doubleFn, squareFn, plus100)
		expect(magicOperation(1)).to.equal(104)
	})
})