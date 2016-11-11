# Custom Functions Library 

- Why ?

## TEST ! 
- npm test
- In order to show the evidence, please write your own test as well to see if those custom functions would act the way that you expect to do. ^_^ 

## Functions

```javascript

decimalPlaces( ) // You can put either String or Integer
```

```javascript
decimalPlaces('100') 	  // 0
decimalPlaces('.05') 	  // return 2
decimalPlaces(.05) 	      // return 2
decimalPlaces('25e-100')  // return 100


```

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

- toTitleCase()

  - "how are you" -> "How Are You"

- confirmEnding()
 
 - ("Good morning", "g") -> true

 - ("Open sesame", "same") -> true

- plus()

 - (2, 3, 5) -> 10
 
 - (5, 5, 5) -> 15

 - (10,10,10, 5) -> 35

- repeatStringNumTimes()

 - ("ab", 2) -> ''abab"
 
 - ("@#", 3) -> "@#@#@#"

- removeCurseWords()

 - ('I fucking love you') -> 'I love you'

 - this is a curry version of filter, please see /tests/units/filterWords-curry-spec.js for how you can use this

- palindrome()

 - "eye" -> true

 - "race car" -> true

 - "A man, a plan, a canal. Panama" -> true

- factorialize()

 - (4) -> 1 x 2 x 3 x 4 -> 24

 - (2) -> 1 x 2 -> 2

- findLongestWord()

 - "May the force be with you" -> 5

 - "How are you doing" -> 5

 - "Yo Hey" -> 3

- truncateString()

 - ("how are you", 2) -> ho ...

 - ("how are you", 5) -> how a ...

- getIndexOfInt()
 
 - ([10, 20, 30, 40, 50], 30)) -> 2

 - ([2, 5, 10], 15)) -> 3

 - ([40, 60], 50)) -> 1

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

