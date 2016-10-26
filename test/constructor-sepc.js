const expect = require('chai').expect



function Person(name,age){
	this.age = age;
	this.name = name;
	this.speak = function(){
		return `hi, my name is ${this.name}`;
	}
}

function Student(name,age){
	Person.call(this, name, age)
	this.job = 'student'
}

function Employee(name, age){
	Person.call(this,name,age)
	this.job = 'employee'
}



describe('Constructor', ()=>{
	describe('Studnet', ()=>{
		var cwStudent;
		
		before(()=>{
			cwStudent = new Student('cw', 22)	
		})
		
		it('job equation check', ()=>{
			expect(cwStudent.job).to.equal('student')
		})
		it('name equation check', ()=>{
			expect(cwStudent.name).to.equal('cw')
		})
		it('age equation check', ()=>{
			expect(cwStudent.age).to.equal(22)
			expect(typeof cwStudent.age).to.equal('number')
		})
	})
	describe('Employee', ()=>{
		var kenEmployee;
		before(()=>{
			kenEmployee = new Employee('ken', 28)
		})
		it('job equation check', ()=>{
			expect(kenEmployee.job).to.equal('employee')
		})
		it('name equation check', ()=>{
			expect(kenEmployee.name).to.equal('ken')
		})
		it('age equation check', ()=>{
			expect(kenEmployee.age).to.equal(28)
			expect(typeof kenEmployee.age).to.equal('number')
		})	
	})

	describe('Add speak funciton to Employee and Student', ()=>{
		var cwStudent,kenEmployee;
		before(()=>{
			kenEmployee = new Employee('ken', 28)
			cwStudent = new Student('cw', 22)
		})
		it('Sutdent should be able to speak', ()=>{
			expect(kenEmployee.speak()).to.equal('hi, my name is ken')
		})
		it('Employee should be able to speak', ()=>{
			expect(cwStudent.speak()).to.equal('hi, my name is cw')
		})

	})
	
})




