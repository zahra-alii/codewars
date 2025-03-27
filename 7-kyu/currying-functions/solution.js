// SOLUTION 1:
function multiplyAll(arr) {
  return function(int){ // return new func that takes in int
    return arr.map((elem) => elem * int); // iterates through every element,returns new arr multiplied 
  }
}

// SOLUTION 2: (arrow func)
const multiplyAll = arr => int => arr.map((elem) => elem * int); 
