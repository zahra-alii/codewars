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
- set total variable = to 0
- create for loop
-set condition for all positive numbers
- add each element to 0, return total. */
​