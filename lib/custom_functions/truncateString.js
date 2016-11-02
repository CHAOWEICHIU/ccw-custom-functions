module.exports = function truncateString(str, num) {
  	
  	if(str.length === num) return str
	if(str.length < num) return str
  	var cutIndex = num < 3 ? num : num - 3
  
  	var result = str.substring(0, cutIndex)
  
  return result + '...'
}