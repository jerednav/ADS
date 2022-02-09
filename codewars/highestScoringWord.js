Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

function high(x){
  
}

PREP
—
Parameters
Given a string of words


Return
Return highest scoring word based on points

Example
Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano'); 
Test.assertEquals(high('take me to semynak'), 'semynak'); 
Test.assertEquals(high('aa b'), 'aa');
Test.assertEquals(high('b aa'), 'b');
Test.assertEquals(high('bb d'), 'bb');
Test.assertEquals(high('d bb'), 'd');
Test.assertEquals(high('aaa b'), 'aaa');

Pseudocode
1.  Create alphabet string where each letter is worth a point      e.g. const alphabet = abcdedfghijklmnopqrstuvwxyz
2. Determine the score for each word using a function      e.g. const wordScore = word => word.split(‘ ‘).reduce((arc) => a + alphabet.indexOf(c), 0)
    1. This function prepares the number for the score check in the next function
3. Use common placeholders for the highest count and highest word
4. Split the string into function into an array using a space as the delimiter.    e.g. [‘what’, ‘time’, ‘are’, ‘we’, ‘climbing’, ‘up’, ‘the’, ‘volcano’]
5. Loop through array and on each element, execute a function
6. Hold scoreCheck, which is the result of the sum of the function, wordScore
7. If the score is higher, it will replace the highest word and highest count



function high(str){
  const alphabet = ' abcdefghijklmnopqrstuvwxyz'
  const wordScore = word => word.split('').reduce((a,c) => a + alphabet.indexOf(c), 0)
  let highestWord = ''
  let highestCount = 0
  str.split(' ').forEach(w=> {
    const scoreCheck = wordScore(w)
    if (scoreCheck > highestCount) {
      highestWord = w
      highestCount = scoreCheck
    }
  })
  return highestWord
}

