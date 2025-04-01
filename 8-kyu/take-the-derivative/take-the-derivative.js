// SOLUTION:
function derive(coefficient,exponent) {
  const product = coefficient * exponent; // put 2 params into 1 variable
  return `${product}x^${exponent - 1}` // return as temp literal
}