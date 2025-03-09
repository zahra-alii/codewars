function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a,b) => a + b)
}
​
/* SOLUTION EXPLAINED:
- use .concat() to combine arr1 + arr2
- use .reducee() to get the sum of both arrays and return 1 value */