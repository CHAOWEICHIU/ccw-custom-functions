const tempConverter = require('./tempConverter')

module.exports =  {
	result: {
		value: '',
		toName: '',
		fromName: ''
	},
	value: function(value){
		this.result.value = value
		return this
	},
	to: function(toName){
		this.result.toName = toName
		return this
	},
	from: function(fromName){
		this.result.fromName = fromName
		return this
	},
	done: function(){
		if(!this.result.value || !this.result.toName || !this.result.fromName)
			throw Error ('.value() .from() .to() Needed')
		return tempConverter(this.result.fromName, this.result.toName, this.result.value)
	}
	
	
}