// const expect = require('chai').expect
// 	, Person = require('../../lib/yet_finish/Person').personConstructor
// 	, Student = require('../../lib/yet_finish/Person').studentConstructor

// describe.skip('Person', ()=>{
// 	let ting,info;
// 	before(()=>{
// 		info = { name : 'ting', age: 22, gender: 'F'}
// 		ting = new Person(info)
// 	})

// 	it('.name return name', ()=>{
// 		expect(ting.name).to.equal('ting')
// 	})
// 	it('.age return age', ()=>{
// 		expect(ting.age).to.equal(22)
// 	})
// 	it('.gender', ()=>{
// 		expect(ting.gender).to.equal('F')
// 	})
// })

// describe('Student', ()=>{
// 	let ken, info;
// 	before(()=>{
// 		info = {name:'ken', age:29, gender:'M'}
// 		ken = new Student(info)
// 	})
// 	it('.name', ()=>{
// 		expect(ken.name).to.equal('ken')
// 	})
// 	it('.age', ()=>{
// 		expect(ken.age).to.equal(29)
// 	})
// 	it('.gender', ()=>{
// 		expect(ken.gender).to.equal('M')
// 	})
// 	it('.job', ()=>{
// 		expect(ken.job).to.equal('student')
// 	})
// 	it.skip('.purchaseItems()', (done)=>{
// 		let items = [
// 			{name: 'apple', qty: 2},
// 			{name: 'orange', qty: 2}
// 		]
// 		ken.purchaseItems().then((err, res)=>{
// 			expect(err).to.equal(null)
// 			done()
// 		})
// 	})
// })







