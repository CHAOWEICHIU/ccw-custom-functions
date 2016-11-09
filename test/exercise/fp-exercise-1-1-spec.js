const expect = require('chai').expect
	, Promise = require('bluebird')
	, _ = require('lodash')
	, decimalPlaces = require('../../lib/custom_functions/decimalPlaces')

var whenDataLoaded = new Promise((resolve, reject)=>{
	let students = [
		{name: 'cw',    age: 27, gender:'M', allowance: 1000, department:'IT', 	  salary: 60000.56},
		{name: 'ken',   age: 31, gender:'M', allowance: 2000, department:'IT',    salary: 44000.32},
		{name: 'ck',    age: 35, gender:'M', allowance: 3000, department:'IT',    salary: 55000.11},
		{name: 'Ting',  age: 22, gender:'F', allowance: 4000, department:'sales', salary: 70000.85},
		{name: 'Linda', age: 27, gender:'F', allowance: 3000, department:'sales', salary: 40000.49}
	]
	setTimeout(()=>{
		resolve(students)
	}, 100)
})


var getGenderOf 	= _.curry((att, students)=>students.filter(student=>student.gender === att))
  , getDepartmentOf = _.curry((att, students)=>students.filter(student=>student.department === att))
  , getAgeOver  	= _.curry((age, students)=>students.filter(student=>student.age    >   age))
  , selectObjKeyOf  = _.curry((key, students)=>students.map(student=>student[key]))
  , removeObjKeyOf  = _.curry((key, students)=>students.map((student)=>{
									  			delete student[key]
									  			return student
									  		}))
  , addAllowance    = _.curry((amount, students)=>students.map((student)=>{
									  			student.allowance += amount
									  			return student
									  		}))
  , addAge 			= _.curry((age, students)=>students.map((student)=>{
									  			student.age += age
									  			return student
									  		}))
  , priceMethod     = _.curry((method,prices)=>{
					  		switch(method){
					  			case 'sum':
					  				return prices.reduce((acc,price)=>acc+=price,0)	
					  			case 'average':
					  				return prices.reduce((acc, price, i, arr)=>(i ===arr.length -1) ? ((acc+=price)/arr.length) : (acc+=price))
					  			default:
					  				return prices
					  		}
					  })
  , showDecimalsPoint = _.curry((point, prices)=>{
  		return (prices instanceof Array)
		  			? prices.map((price)=>price.toFixed(point))
		  			: prices.toFixed(point)
  })
  






describe('students', ()=>{
	it.skip('show specific things', ()=>{
		whenDataLoaded
			.then(getGenderOf('F'))
			.then(addAllowance(1000))
			.then(removeObjKeyOf('gender'))
			.then(addAge(10))
			.then(getAgeOver(30))
			.then((result)=>{
				console.log(result)
			})
	})
	it('show decemal points for array', ()=>{
		whenDataLoaded
			.then(getDepartmentOf('IT'))
			.then(selectObjKeyOf('salary'))
			.then((result)=>{
				expect(decimalPlaces(result[0])).to.equal(2)
			})
	})
	it('show decemal points for number', ()=>{
		whenDataLoaded
			.then(getDepartmentOf('sales'))
			.then(selectObjKeyOf('salary'))
			.then(priceMethod('sum'))
			.then(showDecimalsPoint('3'))
			.then((result)=>{
				expect(decimalPlaces(result)).to.equal(3)
				
			})	
	})
	// true

			// .then(getDepartmentOf('IT'))
			// .then(getAgeOver(33))
			// .then(selectObjKeyOf('salary'))
			// .then(priceMethod('average'))
			// .then(showDecimalsPoint(0))
})








