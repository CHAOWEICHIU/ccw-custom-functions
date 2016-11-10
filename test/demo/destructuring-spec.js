'use strict'
const expect = require('chai').expect

var student = {
  name:'cw',
  grade: 100
}

describe('Destructuring', ()=>{
	it('Without ES6', ()=>{
		var greet = function(options){
			var money = options.money || 0
			return 'Name: ' + options.name + ', ' + 'Grade: ' + options.grade + ', ' + 'Money: ' + money
		}
		expect(greet(student)).to.equal('Name: cw, Grade: 100, Money: 0')
	})

	it('Without Destructuring', ()=>{
		var greet = function(options){
			var name = options.name
			  , grade = options.grade
			  , money = options.money || 0
			return `Name: ${name}, Grade: ${grade}, Money: ${money}`
		}
		expect(greet(student)).to.equal('Name: cw, Grade: 100, Money: 0')
	})

	it('With Destructuring', ()=>{
		var greet = function(options){
			var { name, grade, money } = options
			money = money || 0
			return `Name: ${name}, Grade: ${grade}, Money: ${money}`
		}
		expect(greet(student)).to.equal('Name: cw, Grade: 100, Money: 0')
	})

	it('With More Destructuring', ()=>{
		var greet = function({name, grade, money = 0}){
			return `Name: ${name}, Grade: ${grade}, Money: ${money}`
		}
		expect(greet(student)).to.equal('Name: cw, Grade: 100, Money: 0')
	})
})




