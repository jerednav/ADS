Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:
"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s =>


PREP
—-
Parameters
Given all consecutive duplicates from a string

Return
Return string with only first word entries


Example
"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"


Pseudocode
//split the string of words into separate words in an array

//filter through the array if not equal the previous word in the index

//join whatever is left in the filter





const removeConsecutiveDuplicates = s =>
s.split(' ').filter((e,i,arr)=> e != arr[i-1]).join(' ')
