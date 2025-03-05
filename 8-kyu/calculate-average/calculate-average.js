function findAverage(array) {
​
  if(array.length === 0){
    return 0;
  }
  let total = 0;
  for(i=0; i<array.length; i++){
    total += array[i]/array.length;
  }
  return total;
}
​
// SOLUTION EXPLAINED:
// create condition for empty arrays
// set total variable to 0
// create a condition that goes through the parameter length
// add the total (0) to every element in the array
// divide by total number of elements in the array (array.length)
// return total
​
​
​