module.exports = function repeatStringNumTimes(str, num) {
  let result = ''
  if(num < 0) return result

  for(let i = 0; i < num; i++){
  		result += str	
  }
  return result
}
