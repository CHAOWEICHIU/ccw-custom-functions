function Person(name, age){
	this.name = name
	this.age = age
	this.greet = function(){
		return `Hello, I am ${this.name}`
	}
}

function Student(name, age){
	Person.call(this,name,age)
	this.job = 'student'
}



module.exports = {
	personConstructor: Person,
	studentConstructor: Student,
}