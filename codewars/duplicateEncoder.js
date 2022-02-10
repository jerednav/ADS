The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Parameters
Given a string

Return
Return a new string where each character in the new string is “(“ if that character appears only once in the original string, or “)” if that character appears more than once in the original string.

Example
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 


Pseudocode
1. Splint the string into an array of letters
    1. Let wordArray = word.split(‘’)
2. Map through wordArray and tell the function what to do with each element ( which we call letter here) in the array.
    1. Return wordArray.map(letter => {
3. In wordArray, use .filter to determine if the element (as lowercase) is equal in both type and value to the letter element, and if it occurs more than once, return ‘)’. If it occurs once then return “(“

const duplicateEncode = (word) => {
    return word
        .toLowerCase()
        .split('')
        .map( function (a, i, w) {
            return w.indexOf(a) == w. lastIndexOf(a) ? '(' : ')'
        })
        .join('')
}

