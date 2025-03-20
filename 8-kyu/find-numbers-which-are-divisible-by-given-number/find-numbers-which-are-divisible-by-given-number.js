// SOLUTION 1:
function divisibleBy(numbers, divisor){
    return numbers.filter(x => x % divisor === 0);
}
​
/* SOLUTION EXPLAINED:
- use .filter() to filter out the elements that DON'T meet condition 
and RETURN every element that is divisble by the divisor (in this case, 2) */

// SOLUTION 2:
 function divisibleBy(numbers, divisor){
    let newArr = [];
    for(let i = 0; i<numbers.length; i++){
      if(numbers[i] % divisor === 0){
      newArr.push(numbers[i]);
    }
  }
  return newArr;
}
