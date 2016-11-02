// const expect = require('chai').expect
// 	, Database = require('../../lib/yet_finish/Database')
// 	, fs = require('fs')

// describe.skip('Databse', ()=>{
// 	let path = './lib/warehouse.json'
// 	let item = {}

// 	beforeEach(()=>{
// 		item.name = 'apple'
// 		item.qty = 5
// 	})
// 	after(()=>{
// 		let setupWarehouse = [{name:'apple', qty:5, price: 10}, {name:'berry', qty:4, price:10}]
// 		fs.writeFile(path, JSON.stringify(setupWarehouse))
// 	})

// 	it('.getItems() return an array', (done)=>{
// 		Database.getItems(path, (err ,res)=>{
// 			expect(err).to.be.null
// 			expect(res).to.be.instanceOf(Array)
// 			done()
// 		})
// 	})

// 	it('.inboundItem() to item already in database', (done)=>{
// 		Database.inboundItem(path, item, (err, res)=>{
// 			expect(err).to.be.null
// 			expect(res).to.equal('add item qty successfully')
// 			done()
// 		})
// 	})

// 	it('.inboundItem() return proper error message if name or qty not provided', ()=>{
// 		delete item.name
// 		Database.inboundItem(path, item, (err)=>{
// 			expect(err).to.equal('need both name and qty')
// 		})
// 	})
// 	it('.inboundItem() return proper error message if qty is less than 0', ()=>{
// 		item.qty = 0
// 		Database.inboundItem(path, item, (err)=>{
// 			expect(err).to.equal('qty should bigger than 1')
// 		})
// 	})
// 	it('.inboundItem() to items not in database', (done)=>{
// 		item.name = 'orange'
// 		item.qty = 4
// 		Database.inboundItem(path, item, (err, res)=>{
// 			expect(res).to.equal('add new item successfully')
// 			done()
// 		})
// 	})
	
// 	it('.outboundItem() return successful message', (done)=>{
// 		Database.outboundItem(path, item, (err, res)=>{
// 			expect(res).to.equal('outbound item successfully')
// 			done()
// 		})
// 	})

// 	it('.outboundItem() return error if after outbound is less than 0', ()=>{
// 		item.qty = 50
// 		Database.outboundItem(path, item, (err, res)=>{
// 			expect(err).to.equal('not enough qty in warehouse')
// 		})
// 	})

// })







