// SOLUTION:
const reverseSeq = n => {
  let arr = [];
  for (let i = n; i>0; i--){
    arr.push(i);
  }
  return arr;
};
​
/* SOLUTION EXPLAINED: 
- decl empty arr
- starting point in for loop = n, n is always > 0, use decrement for reverse
- push every elem onto new array, then return
*/