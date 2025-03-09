// SOLUTION 1:
function invert(array) {
  let newArr = []
  for(let i=0; i<array.length; i++){
    newArr.push(-array[i]);
  }
  return newArr;
}

// SOLUTION 2: .MAP METHOD
 function invert(array){
    return array.map(num => -num);
  }
