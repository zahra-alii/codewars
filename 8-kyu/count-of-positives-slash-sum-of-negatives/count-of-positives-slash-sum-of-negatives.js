function countPositivesSumNegatives(input){
   // declare new array
   const arr = []
  // set default conditon for empty/null arrays
    if(input === null || input.length === 0){
    return [];
  }
  // set total variables for positive & negative nums to 0
    let negativeSum = 0;
    let positiveNums = 0;
  // make a for loop that passes through param
    for (let i=0; i<input.length; i++){
  // if element is positive...
      if(input[i] > 0){
    // increment the elements
      positiveNums++;
      }else{
    // add every negative element
    negativeSum += input[i];
  }
}
//   push both values onto the new arrays, then return
  arr.push(positiveNums);
  arr.push(negativeSum);
  return arr;
  }
  
  // // TEST DATA:
  // alert(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); // gives output of [10, -65]
​
