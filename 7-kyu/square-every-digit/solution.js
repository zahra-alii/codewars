// SOLUTION 1: 
function squareDigits(num){
  let string = String(num); // turn number into string
  let result = ""; // create empty str to store results
  for (let i = 0; i<string.length; i++){ // iterate through the index of string
    result += string[i]**2 // square each element & put them into empty str
  }
  return Number(result);
}

// SOLUTION 2: 
const squareDigits = num => +String(num).split('').map(elem => elem**2).join('');
// uranary op (+) does the same thing as Number()
// use .split() + .join() to return integer
