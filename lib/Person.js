const Promise = require('promise')
	, Database = require('./Database')

function Person(info){
	this.name = info.name
	this.age = info.age
	this.gender = info.gender
}

function Student(info){
	Person.call(this, info)
	this.job = 'student'
	this.purchaseItems = function(items){
		return new Promise((resolve, reject)=>{
			if (err) reject(err);
      		else resolve('good job!');
		}) 
	}
}

module.exports = {
	personConstructor: Person,
	studentConstructor: Student
}