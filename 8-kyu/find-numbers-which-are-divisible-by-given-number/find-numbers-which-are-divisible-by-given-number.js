// SOLUTION 1:
function divisibleBy(numbers, divisor){
    return numbers.filter(x => x % divisor === 0);
}
​
/* SOLUTION EXPLAINED:
- use .filter() to filter out the elements that DON'T meet the condition 
- return every element that is divisible by the divisor (in this case, 2) */

// SOLUTION 2:
 function divisibleBy(numbers, divisor){
    let newArr = []; // decl empty arr
    for(let i = 0; i<numbers.length; i++){
      if(numbers[i] % divisor === 0){ // if num is divisible by divisor...
      newArr.push(numbers[i]);
    }
  }
  return newArr;
}
