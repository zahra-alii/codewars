// SOLUTION 1: 
function differenceInAges(ages){
  return [Math.min(...ages), Math.max(...ages), Math.max(...ages)-Math.min(...ages)];
}
​
/* SOLUTION EXPLAINED:
- Use Math.min() + spread operator to return a new array of the min age, max age and the difference */

// ALTERNATIVE SOLUTION:
function differenceInAges(ages){
  let max = Math.max(...ages);
  let min = Math.min(...ages);
  let diff = max - min;
  
  return [min, max, diff];
}

/* SOLUTION EXPLAINED:
- declare each variable seperately (max, min and difference)
- use Math.max(), Math.min() & spread op to return the new array */​
