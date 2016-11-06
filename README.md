# Custom Functions Library 

## Why?
As a professional programmer, there are cases that would build your own custom functions to handle certain situation across different projects. We want our custom function to act the way we expected to act. Therefore, I have written tests to back it up. Feel free to write more test to make it fail!!!! 

## functional programming style
 
**Benefit?**

1. resuseble

2. easy to maintain

3. east to test

4. simple mental model

5. app can be scale horizontally 

**Why?**

1. stateless

2. pure 

3. no side effect

## Functional programming libraries

- [underscore](http://underscorejs.org/)

- [lodash](https://lodash.com/)

- [ramda](http://ramdajs.com/)


## TEST ! 
- npm test
- In order to show the evidence, please write your own test as well to see if those custom functions would act the way that you expect to do. ^_^ 

## Functions

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

