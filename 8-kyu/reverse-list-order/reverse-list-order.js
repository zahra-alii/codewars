// SOLUTION 1:
​
function reverseList(list) {
  let arr = []
  for(let i=list.length - 1; i>=0; i--){
    arr.push(list[i]);
  }
  return arr;
}
​
/* SOLUTION EXPLAINED:
- Create a new array to push elements on in line 4
- Make for loop: Set starting point (initialization) equal to last element of the array (.length - 1)
- return new array */