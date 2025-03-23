function countBy(x, n) {
  let z = [];
  for(let i=1; i<=n; i++){
   z.push(x*i); 
  }
    return z;
}
​
// SOLUTION EXPLAINED:
// create a new array (z)
// create a for loop that passes through parameter n
// push every element that is a multiple of (x) * the element into the new arr
// return the new array
