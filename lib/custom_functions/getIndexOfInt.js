module.exports = function getIndexOfInt(arr, goal) {
	var sortedArray = arr.sort(function(a,b){return a-b})
	
	if(sortedArray.indexOf(goal)!==-1)return sortedArray.indexOf(goal)
	
	if(sortedArray[sortedArray.length-1] < goal) return sortedArray.length
	
	var indexForTarget =  sortedArray.reduce(function(prev, curr){
  		return (Math.abs(curr - goal) <= Math.abs(prev - goal) ? curr : prev)
	})
	return sortedArray.indexOf(indexForTarget)


}

