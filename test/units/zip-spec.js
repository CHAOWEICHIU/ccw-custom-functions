const expect = require('chai').expect 
	, zip = require('../../lib/custom_functions/zip')




describe('zip',()=>{
	it('check 1', ()=>{
		let arr1 = [1,2,3]
		  , arr2 = [2,4,5]
		  , arr3 = [4,2]
		let r = zip(arr1, arr2, arr3)
		expect(r).to.eql([1,2,3,2,4,5,4,2])
	})
	it('check 2', ()=>{
		let arr1 = ['a', 'b']
		  , arr2 = ['b']
		  , arr3 = [2,4]

		let r = zip(arr1, arr2, arr3)
		expect(r).to.eql(['a','b','b',2,4])
	})
	it('check 3', ()=>{
		let arr1 = ['a']
		let r = zip(arr1)
		expect(r).to.eql(['a'])
	})
	it('check 4', ()=>{
		let arr1 = []
		let r = zip(arr1)
		expect(r).to.eql([])
	})
	it('check 5', ()=>{
		let arr1 = ['']
		let r = zip(arr1)
		expect(r).to.eql([''])
	})
	it('check 6', ()=>{
		let arr1 = ['', false]
		  , arr2 = [undefined, '?']
		let r = zip(arr1, arr2)
		expect(r).to.eql(['', false, undefined, '?'])

	})

})

