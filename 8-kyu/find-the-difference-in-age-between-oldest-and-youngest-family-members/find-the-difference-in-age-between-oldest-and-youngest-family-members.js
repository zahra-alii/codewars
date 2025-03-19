function differenceInAges(ages){
  return [Math.min(...ages), Math.max(...ages), Math.max(...ages)-Math.min(...ages)];
}
​
/* SOLUTION EXPLAINED:
- Use Math.min() + spread operator to return a new array of the min age, max age and the difference */
​