String Transformer
Given a string, return a new string that has transformed based on the input:

* 		Change case of every character, ie. lower case to upper case, upper case to lower case.
* 		Reverse the order of words from the input.
* 
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"

You may assume the input only contain English alphabet and spaces.


PREP
—
Parameters
Given a string

Return
Return a new string that has transformed input based on:
1. Change case of every character that’s lowercase to uppercase, and every character that’s uppercase into lowercase
2. Reverse the order of words from the input
 Example
"Example Input" ==> "iNPUT eXAMPLE"

Pseudocode
1. Split the array into separate chraracters with .split(‘ ‘) method to separate the words
2. Reverse the string and join them, which will turn the words into Input Example
3. .split to separate each letter
4. Map through each character and using conditional(ternary) operator

function stringTransformer(str) {
  return str.split(' ').reverse().join(' ').split('').map(e => e == e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('')
}

