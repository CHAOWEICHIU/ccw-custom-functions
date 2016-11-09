const expect = require('chai').expect
	, Promise = require('bluebird')
	, _ = require('lodash')

var whenDataLoaded = new Promise((resolve, reject)=>{
	let students = [
		{name: 'cw', age: 27, gender:'M', allowance: 1000},
		{name: 'ken', age: 31, gender:'M', allowance: 2000},
		{name: 'ck', age: 35, gender:'M', allowance: 3000},
		{name: 'Ting', age: 22, gender:'F', allowance: 4000},
		{name: 'Linda', age: 27, gender:'F', allowance: 3000}
	]
	setTimeout(()=>{
		resolve(students)
	}, 100)
})

var getGenderOf 	= _.curry((att, students)=>students.filter(student=>student.gender === att))
  , getAgeOver  	= _.curry((age, students)=>students.filter(student=>student.age    >   age))
  , selectObjKeyOf  = _.curry((key, students)=>students.map(student=>student[key]))
  , removeObjKeyOf  = _.curry((key, students)=>{
  		return students.map((student)=>{
  			delete student[key]
  			return student
  		})
    })
  ,addAllowance = _.curry((amount, students)=>{
  		return students.map((student)=>{
  			student.allowance += amount
  			return student
  		})
  })
  ,addAge = _.curry((age, students)=>{
  		return students.map((student)=>{
  			student.age += age
  			return student
  		})
  })

describe('bird', ()=>{
	it('pass', (done)=>{
		whenDataLoaded
			.then(getGenderOf('M'))
			.then(getAgeOver(20))
			.then(addAllowance(200))
			.then(removeObjKeyOf('gender'))
			.then(addAge(20))
			.then((result)=>{
				console.log(result)
				done()
			})
			

	})
	
})