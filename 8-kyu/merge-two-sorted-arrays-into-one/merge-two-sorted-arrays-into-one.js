// SOLUTION:
function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a,b) => a-b)));
}

// SOLUTION EXPLAINED:
// Array.from() creates a shallow copy of the array
// new Set() creates a new array
// .concat() combines/concatenates both arrays together 
// .sort() returns every element passed into the new array in order
