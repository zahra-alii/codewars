function sumMix(x){
  return x.reduce((acc, c) => acc + Number(c), 0);
}
​
/* SOLUTION EXPLAINED:
- use .reduce() to take in 2 args (accumulator + current value) and get the sum
- to make every number & string passed in return as a number, use "Number" operator on value "c"
- set initial value to 0 */