// SOLUTION 1:
function distinct(a) {
  let arr = [];
  for(i=0; i<a.length; i++){
    if(!arr.includes(a[i])){
       arr.push(a[i])
    }
  }
    return arr;
}
​
// SOLUTION 1 EXPLAINED:
// create new array to push elements into (after condition)
// create for loop through passed up to param length
// condition: "if the array does NOT include the element..."
// push the element into the new array (arr), then return arr