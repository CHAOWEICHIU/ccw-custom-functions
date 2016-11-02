module.exports = function palindrome(str) {
  let before = str.toLowerCase()
  					.replace(/[^\w\s]/gi, '')
  					.replace('_', '')
  					.split(' ')
  					.join('')
  let after = before.split('')
  					.reverse()
  					.join('')
  
  
  if(before === after) {
  	return true;
  } else {
  	return false;	
  }
  
}
