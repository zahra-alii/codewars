// SOLUTION:
function isPythagoreanTriple(integers) {
  const [a,b,c] = integers.sort((a,b) => a < b ? -1 : 1); // deconstructure array & turn 3 integers into variables, return it sorted
  if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)){ // if a^2 + b^2 = c^2...
    return true;
  }else{
    return false;
  }
}

// Alternative:
function isPythagoreanTriple(integers) {
  const [a,b,c] = integers.sort((a,b) => a-b);
  if (a**2 + b**2 === c**2){
    return true;
  }else{
    return false;
  }
} 
