function toTitleCase(input){
	return input
			.split(' ')
			.map(i => i[0].toUpperCase() + i.substring(1).toLowerCase())
			.join(' ') 
}

module.exports = toTitleCase