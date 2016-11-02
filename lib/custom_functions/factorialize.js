module.exports = function factorialize(num) {
  var result = 1
  var i = 1
  do {
  	result = result * i
  	i ++
  } while ( i <= num)
  
  return result
}