function fakeBin(x){
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
​
/* SOLUTION EXPLAINED:
- use .split() to remove ""
- use .map() to iterate over every number/element
- set condition using ternary operator
- join the elements together again to get 1 value back */