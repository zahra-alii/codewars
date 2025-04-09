// SOLUTION:
function sumArray(array) {
  if(!array || array.length < 3) return 0;
  
 const sorted = array.sort((a,b) => a-b);
  return sorted.slice(1,-1).reduce((total, c) => total + c, 0);
}