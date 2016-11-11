# Custom Functions Library 

- Why ?

##

> **TEST?**

```
npm test
```


## DEMO
> **Get Decimal Point**

```javascript
// You can put either String or Integer
var input  = 5.5
  , output = 1
decimalPlaces( input ) === output
```

```javascript
decimalPlaces('100') 	  // 0
decimalPlaces('.05') 	  // return 2
decimalPlaces(.05) 	      // return 2
decimalPlaces('25e-100')  // return 100
```
------------------------------------------


> **Make The String A Title Case String**

```javascript
var input  = 'good monday morning'
  , output = 'Good Monday Morning'
toTitleCase( input ) === output
```

```javascript
toTitleCase('how are you') // return 'How Are You'
toTitleCase('hoW aRe yOU') // return 'How Are You'
```
------------------------------------------


> **Confirm Ending Word/Words**

```javascript
// case sensitive
var confirmingString  = '12345'
  , confirmingWords   = '45'
  , output            = true
confirmEnding(confirmingString,confirmingWords) === output
```

```javascript
confirmEnding("Good morning", "g")   // return true
confirmEnding("Open sesame", "same") // return true
confirmEnding("Open sesame", "Sama") // return false
```
------------------------------------------


> **A word, phrase which reads the same backward or forward**

```javascript
var input  = 'eye'
  , output = true
palindrome( input ) === output
```

```javascript
palindrome('eye') 								// true
palindrome('race car')							// true
palindrome('A man, a plan, a canal. Panama')  	// true

```
------------------------------------------


> **Cutting Off String and Replace With ...**

```javascript
var input  = 'I have a lot to say!' 
  , output = 'I have a lot to ...'
truncateString(input, 16) === output
```

```javascript
truncateString("how are you", 2) // return ho ...
truncateString("how are you", 5) // return how a ...

```
------------------------------------------


> **Remove Curse Words**

```javascript
var input  = 'I fucking love you'
  , output = 'I love you'
removeCurseWords( input ) === output
```

```javascript
removeCurseWords('fuck you') // return 'you'
```
------------------------------------------


> **Get Index Of The Interger**

```javascript
var input  = [10, 20, 30, 40, 50]
  , target = 20
  , output = 1
getIndexOfInt(input, target) === output
```

```javascript
getIndexOfInt([10, 20, 30, 40, 50],  30) // return 2
getIndexOfInt([2, 20, 10]          , 19) // return 2
// Will Sort the Array, 
// then find the index of target
getIndexOfInt([40, 60]			   , 50) // return 1
// will favor bigger number
getIndexOfInt([2, 5, 10]           , 15) // return 3
// will return (Array.length + 1) 
// if target is bigger than any number in array

```
------------------------------------------


> **Remove Falsy Value In Array**

```javascript
var input  = [false, null, 0, NaN, undefined, ""]
  , output = [ ]
falsyRemover( input ) === output
```

```javascript
falsyRemover([10, 'ate', '', false]) // return [10, 'ate']
falsyRemover(['false', 'null', 200]) // return ['false', 'null', 200]
```
------------------------------------------


> **Get Index Of The Interger**

```javascript
var input  = [1,2,3,4]
  , num    = 2
  , output = [[1,2],[3,4]]
splitArrayEvery(num, input) === output
```

```javascript
splitArrayEvery(2, [1,2,3,4,5]) 	// return [[1,2],[3,4],[5]]
splitArrayEvery(3, [1,2,3,4,5,6])   // return [[1,2,3],[4,5,6]]
```
------------------------------------------


> **Temperature Converter (Kelvin/Fahrenheit/Celsius)**

```javascript
var input  = 271 
  , from   = 'Kelvin'
  , to     = 'Fahrenheit'
  , output = 18
tempConverterAPI.value(input).from(from).to(to).done() === output
```

```javascript
tempConverterAPI.value(65).from('Fahrenheit').to('Celsius').done() //return 18
tempConverterAPI.value(280).from('f').to('c').done() 			   //return 44
tempConverterAPI.value(65).from('F').to('C').done()  			   //return 18
// Short Cut Provided 
tempConverterAPI.value(65).from('f').to('c').done()  			   //return 18
// Not Case Sensitive
```
------------------------------------------


> **Infinite Plus Function**

```javascript
var inputA = 2
  , inputB = 3
  , inputC = 5
  , output = 10
plus(inputA,inputB,inputC) === output
```

```javascript
plus(5,5,5) 	  // return 15
plus(10,10,10,10) // return 40
```
------------------------------------------

> **Reapeat Tartget String For Number Of Times**
```javascript
var input  ='123'
  , times  = 2
  , output ='123123'
repeatStringNumTimes(input, times) === output
// will return empty string 
// if times is less/equal than 0
```

```javascript
repeatStringNumTimes("ab", 2) //return 'abab'
repeatStringNumTimes("@#", 3) //return '@#@#@#'
repeatStringNumTimes("@#", 0) //return ''
repeatStringNumTimes("@#", -2) //return ''
```
------------------------------------------


> **Factorialize**

```javascript
var input = 4
  , output = 1*2*3*4
factorialize(input) === output
```

```javascript
factorialize(4)  // return 24
factorialize(10) // return 3628800
factorialize(20) // return 2432902008176640000
```
------------------------------------------


> **Find Longest Word Length**

```javascript
var input  = 'How are you doing'
  , target = 5
findLongestWord( input ) === output
```

```javascript
findLongestWord('Yo Hey') 			 // return 3
findLongestWord('May I be with you') // return 4
findLongestWord('123456 good') 		 // return 6
```
------------------------------------------


> **Partially Match**

```javascript
var input  = ["floor", "for"]
  , output = true
mutation( input ) === output
```

```javascript
mutation(["hello", "hey"]) // return fasle
```
------------------------------------------


 > **Check Valid Zipcode**

```javascript
var input  = '48326'
  , output = true
validZipcode( input ) === output
```

```javascript
validZipcode('48326') // return true
validZipcode('a8326') // return false
validZipcode('12s')   // return false
```
------------------------------------------


> **Zip With Infinite Arguments**

```javascript
var inputA = ['a']
  , inputB = ['b']
  , inputC = ['c']
  , output = ['a','b','c']
zip(inputA, inputB, inputC) === output
```

```javascript
zip([1,2,3], [4,5]) 	// return [1,2,3,4,5]
zip([1,2,3], ['4','5']) // return [1,2,3,'4','5']
```
------------------------------------------


