// SOLUTION 1: 
function sumMix(arr){
    let total = 0;
    for (let i = 0; i<arr.length; i++){
        total += Number(arr[i]); // return sum as a #
    }
    return total; 
}

// SOLUTION 2: 
function sumMix(x){
  return x.reduce((acc, c) => acc + Number(c), 0);
}
​
/* SOLUTION EXPLAINED:
- use .reduce() to take in 2 args (accumulator + current value) and get the sum
- to make every number & string passed in return as a number, use "Number" operator on value "c"
- set initial value to 0 */
