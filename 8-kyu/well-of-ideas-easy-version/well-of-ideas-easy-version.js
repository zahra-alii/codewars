// SOLUTION:
const well = x => {
  const goodCount = x.filter(x => x === 'good').length;
  return goodCount < 1 ? 'Fail!' : 
         goodCount < 3 ? 'Publish!' : 'I smell a series!';
}
​
// SOLUTION EXPLAINED: 
// function takes in x as the parameter and executes on the data inside the {}
// declare variable goodCount to plug in conditions
// use the filter method to target every array and return a new array that passes desired conditions
// if goodCount < 1 - return 'Fail'
// if goodCount < 3 - return 'Publish'
// Else (default) - return "I smell a series"