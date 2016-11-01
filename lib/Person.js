function Person(name, age){
	this.name = name
	this.age = age
	this.greet = function(){
		return `Hello, I am ${this.name}`
	}	
}



module.exports = {
	personConstructor: Person
}