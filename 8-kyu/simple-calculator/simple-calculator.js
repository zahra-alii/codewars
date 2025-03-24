function calculator(a,b,sign){
  return typeof a === 'number' && typeof b === 'number' 
  && ['+', '-', '*', '/'].includes(sign) ? sign === '+' ? a + b : sign === '-' ? a - b : sign === '*' ? a * b : a / b : 'unknown value'
}
  
  
/* SOLUTION EXPLAINED:
- use typeof op to check whether value = number or sign
- if any of the vals include a sign, return the matching functions else 'unknown value' as default */