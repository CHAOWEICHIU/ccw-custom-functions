const expect = require('chai').expect
	, Person = require('../lib/person').personConstructor


describe('Person', ()=>{
	let cw;
	before(()=>{
		cw = new Person('cw', 22)
	})

	it('.age', ()=>{
		expect(cw.age).to.equal(22)
	})
	it('.name', ()=>{
		expect(cw.name).to.equal('cw')
	})
	it('greet()', ()=>{
		expect(cw.greet()).to.equal('Hello, I am cw')
	})
})