// Solution 1: For loop
function positiveSum(arr) {
  let total = 0;
  for(let i=0; i<=arr.length; i++){
    if(arr[i] > 0){
      total += arr[i]
    }
  }
  return total;
}
​
/* SOLUTION EXPLAINED:
- decl total variable
- create for loop
- set condition for all positive numbers
- add each element to 0, return total. */
​
// Solution 2: .reduce() + .filter() methods
function positiveSum(arr) {
  return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
}

/* SOLUTION EXPLAINED:
- use .filter to filter out numbers that match condition (x > 0)
- use iterate to iterate through every number, add them together and get back a new array
- initial val = 0 */
