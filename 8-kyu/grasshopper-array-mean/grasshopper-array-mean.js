function findAverage(nums) {
  return nums.reduce((a,b) => a + b, 0)/nums.length;
}
​
// SOLUTION EXPLAINED:
// use .reduce method to take in 2 arguments (a, b)
// add both arguments together and set the initial value to 0
// divide by the number of values in the list (nums.length)