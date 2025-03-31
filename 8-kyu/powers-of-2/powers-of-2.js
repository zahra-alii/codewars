// SOLUTION:
function powersOfTwo(n){
  const arr = []; // decl empty arr
  for (let i = 0; i<=n; i++){
    arr.push(Math.pow(2,i)); // push every elem to power of 2 into arr
  }
  return arr;
}