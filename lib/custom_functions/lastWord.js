module.exports = function(word){  
    const isNum = (typeof word === 'number') ? true : false
        , wordArray = String(word).split('')
        , lastWord = wordArray[wordArray.length-1]
    return isNum ? parseInt(lastWord) : lastWord
}
