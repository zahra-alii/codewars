// SOLUTION 1 - USING A FOR LOOP

function findAverage(array) {
if(array.length === 0){
return 0;
}
let total = 0;
// for loop that passes into param length
for(let i=0; i<array.length; i++){
total += array[i]/array.length;
}
return total;

// SOLUTION 1 EXPLAINED:
// create condition for empty arrays to return 0
// declare total variable, set the value to 0
// create for loop that passes through param length
// add the total to every element passed into the array, then divide by total # of elements (array.length)
  

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
