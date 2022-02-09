The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.


PREP
—
Parameters
Given string of letters

Return
Return count of all occurring characters in a string.

Example
assert.deepEqual(count("aba"), { a: 2, b: 1 }); 
    assert.deepEqual(count(""), {});    


Pseudocode
1. Start empty object as the counter
2. Loop through array
3. For each letter, add object count

function count (str) {
    let charCount = {}
    string.split('').forEach(c => charCount[c] ? charCount [c]++ : charCount[c] = 1)
    return charCount
}


function totalCount(str) {
    let myStr = str.split('').join('')
    const totalChars = {}
    for (let chars of myStr) {
        totalChars[chars] = (totalChars[chars] || 0) + 1
    }   
    return totalChars
}

( || in a variable assignment is a common way to specify a default value. This is because of JavaScript's falsy values. In JavaScript, undefined, null, empty string and 0 all evaluate to false in a boolean context. 

Using || in an assignment is a way of saying "if defined, otherwise use this”. )
