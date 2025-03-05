// SOLUTION 1:
​
function findNeedle(haystack){
return `found the needle at position ${haystack.indexOf("needle")}`
}
​
// SOLUTION 1 EXPLAINED:
// used temporal literals + .indexOf method to find the value "needle"


// SOLUTION 2: For loop + Condition
function findNeedle(arr) {
for (let i=0; i<arr.length; i++){
if (arr[i] === 'needle'){
return 'found the needle at position ' + i;
}
}
}

// SOLUTION 2 EXPLAINED:
// create a for loop going through the parameter length
// set condition and return statement
