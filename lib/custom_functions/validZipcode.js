module.exports = function(zipCode){
	let code = zipCode.toString().trim()
	return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(code)
}