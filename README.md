# Custom Functions Library 

- Why ?

## TEST ! 
- npm test
- In order to show the evidence, please write your own test as well to see if those custom functions would act the way that you expect to do. ^_^ 

## Functions


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


> Get Index Of The Interger

```javascript
var input  = [10, 20, 30, 40, 50]
  , target = 20
  , output = 1
getIndexOfInt(input, target) === output
```

```javascript
getIndexOfInt([10, 20, 30, 40, 50], 30)) 			// return 2
getIndexOfInt([2, 20, 10]          , 19)    		// return 2
// Will Sort the Array, 
// then find the index of target
getIndexOfInt([40, 60]			   , 50)    		// return 1
// will favor bigger number
getIndexOfInt([2, 5, 10]           , 15)) 			// return 3
// will return (Array.length + 1) 
// if target is bigger than any number in array

```
------------------------------------------

- 
 
 - () -> 2

 - () -> 3

 - ([40, 60], 50)) -> 1








- compose()

 - see how you can use this magic at /test/units/composeExample-spec.js

- splitArrayEvery()

 - (2, [1,2,3,4]) -> [[1,2],[3,4]]

 - (3, [1,2,3,4]) -> [[1,2,3],[4]]

- tempConverterAPI.value('Integer').from('Fahrenheit').to('Celsius').done()

 - tempConverterAPI.value(65).from('Fahrenheit').to('Celsius').done() -> 18

 - tempConverterAPI.value(65).from('F').to('C').done() -> 18

 - tempConverterAPI.value(271).from('Kelvin').to('Fahrenheit').done() -> 18

 - tempConverterAPI.value(271).from('K').to('F').done() -> 18





- plus()

 - (2, 3, 5) -> 10
 
 - (5, 5, 5) -> 15

 - (10,10,10, 5) -> 35

- repeatStringNumTimes()

 - ("ab", 2) -> "abab"
 
 - ("@#", 3) -> "@#@#@#"





- factorialize()

 - (4) -> 1 x 2 x 3 x 4 -> 24

 - (2) -> 1 x 2 -> 2

- findLongestWord()

 - "May the force be with you" -> 5

 - "How are you doing" -> 5

 - "Yo Hey" -> 3




- falsyRemover()

 - ([7, "ate", "", false, 9]) -> [7, "ate", 9]

 - [false, null, 0, NaN, undefined, ""] -> [ ]

- mutation()
 
 - ["floor", "for"] -> true

 - ["hello", "hey"] -> false

- validZipcode()

 - (48326) -> true

 - (a4104) -> false

 - (12s) -> false

- zip()

 - ([1,2,3], [2,3]) -> [1,2,3,2,3]

 - (['a',2,3], [2,'3', false]) -> ['a',2,3,2,'3',false]

