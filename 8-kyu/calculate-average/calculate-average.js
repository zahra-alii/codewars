// SOLUTION 2
​
function findAverage(array) {
  return array.length === 0 ? 0 : array.reduce((acc, c) => acc + c, 0)/array.length;
}
​
// SOLUTION 2 EXPLAINED:
// use ternary operator to compare the 2 conditions 
// use .reduce method - which takes in a callback function that takes in 2 arguments (acc, c)
// .reduce method also loops through every element in the array and returns a single value
// set the initial val to 0, then divide by total # of elements (array.length)