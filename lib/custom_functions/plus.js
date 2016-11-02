module.exports = function plus(){
	let sum = 0
	for(var i = 0; i < arguments.length; i ++){
		sum += arguments[i]
	}
	return sum
}