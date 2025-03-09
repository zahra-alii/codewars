function removeEveryOther(arr){
  return arr.filter((elem, ind) => ind % 2 === 0);
}
​
/* SOLUTION EXPLAINED:
- .filter() filters out all elements that match a certain condition
- in this case, .filter() takes in 2 args: elem & ind
- the last part states "if the index is divisible by 2, return the element" */
​