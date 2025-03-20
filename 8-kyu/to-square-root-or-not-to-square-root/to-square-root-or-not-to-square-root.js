squareOrSquareRoot = array => array.map(x => Math.sqrt(x) % 1 ? x**2 : Math.sqrt(x));
                                        
/* SOLUTION EXPLAINED:
 - .map() returns a new array
- use ternary operator + modulus for conditionals */