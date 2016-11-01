const expect = require('chai').expect
	, Person = require('../lib/person').personConstructor
	, Student = require('../lib/person').studentConstructor


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

describe('Student', ()=>{
	let ken;
	before(()=>{
		ken = new Student('ken', 30)
	})

	it('.name', ()=>{
		expect(ken.name).to.equal('ken')
	})
	it('.age', ()=>{
		expect(ken.age).to.equal(30)	
	})
	it('.job', ()=>{
		expect(ken.job).to.equal('student')
	})
	it('.greet()', ()=>{
		expect(ken.greet()).to.equal('Hello, I am ken')
	})
})



