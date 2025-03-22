const arr2bin = arr => arr.reduce((acc, curr) => acc + (typeof curr === 'number' ? curr : 0),0).toString(2);
​
/* SOLUTION EXPLAINED:
- use .reduce() to add every element 
- if the element = a number, return the binary ELSE return 0 */