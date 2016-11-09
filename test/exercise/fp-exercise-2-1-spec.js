const expect = require('chai').expect
	, _ = require('lodash')
	, Promise = require('bluebird')

let couple = [
	{name: 'cw', position:'husband', allowance: 1000, feeling:'happy'},
	{name: 'Ting', position:'wife', allowance: 1500, feeling:'happy'}
]

let whenDataLoad = new Promise((resolve, reject)=>{
	setTimeout((resolve(couple)),200)
})

var selectPosition = _.curry((position, students)=>{
		return students.filter((student)=>{
			return student.position === position
		})
	})
  , addAllowance = _.curry((amount, students)=>{
  		return students.map((student)=>{
  			student.allowance += amount
  			return student
  		})
  })
  , changeFeeling = _.curry((feeling, students)=>{
  		return students.map((student)=>{
  			student.feeling = feeling
  			return student
  		})
  })
  , describeSelf = _.curry((students)=>{
  		return students.map((student)=>{
  			return `My name is ${student.name} and I am feeling ${student.feeling}, I have $${student.allowance} in my pocket`
  		})
  })

  // , happyMode = _.curry((status, students)=>{
  // 		if(true)
  // 		// add afflowance
  // 		return students.map((student)=>{
  // 			student.allowance += 300
  // 			return student
  // 		})
  // 	})
  // , 

describe('Wife', ()=>{
	it('pass', ()=>{
		whenDataLoad
			.then(selectPosition('wife'))
			.then(addAllowance(4000))
			.then(changeFeeling('happy'))
			.then(describeSelf())
			.then((result)=>{
				console.log(result)
			})
	})
})


