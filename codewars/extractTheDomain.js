Extract the domain name from a URL

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

function domainName(url){
  //your code here
}



PREP
—
Parameters
Given a URL as a string

Return
Returns the domain name as a string

Example
domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"


Pseudocode
1. Remove all http://, https://, and ww in the beginning with spaces
2. Use Split to delimit the string from the dot
3. Use .shift 
