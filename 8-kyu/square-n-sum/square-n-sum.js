// Solution 1: .reduce() method
function squareSum(numbers){
  return numbers.reduce((acc, c) => acc + c**2, 0);
}

// Solution 2:
function squareSum(numbers){
  let total = 0;
  for(let i=0; i<numbers.length; i++){
    total += numbers[i]**2;
  }
  return total;
}

/* SOLUTION EXPLAINED: 
- Declare total = 0
- Create for loop
- add total to every number squared (or num * num)
- return total  */
