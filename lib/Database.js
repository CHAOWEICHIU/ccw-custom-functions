const fs = require('fs')
	, _ = require('underscore')

module.exports = {
	getItems: function(path, callback){
		fs.readFile(path, 'utf-8', (err, res)=>{
			if(err) return callback(err)
			return callback(null, JSON.parse(res))
		})
	},
	inboundItem: function(path, item, callback){
		// TODO: write test for handling error
		if(item.qty <= 0) return callback('qty should bigger than 1')
		if(!item.name || !item.qty) return callback('need both name and qty')
		this.getItems(path, (err, itemsInWarehouse)=>{

			// let found = _.find(res, {name:'apple'})
			let found = _.findIndex(itemsInWarehouse, {name:item.name})
			if(found !== -1){ 
				itemsInWarehouse[found].qty +=parseInt(item.qty)
				
				fs.writeFile(path, JSON.stringify(itemsInWarehouse), (err, res)=>{
					if(err)return callback(err)
					return callback(null, 'add item qty successfully')
				})
			} else {
				itemsInWarehouse.push({name: item.name, qty:item.qty, price:item.price || 0})
				
				fs.writeFile(path, JSON.stringify(itemsInWarehouse), (err, res)=>{
					if(err)return callback(err)
					return callback(null, 'add new item successfully')
				})
				// TODO: add new item
			}
		})
	}
}