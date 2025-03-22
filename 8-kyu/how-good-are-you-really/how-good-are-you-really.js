// SOLUTION 1:
function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((acc, c) => acc + c) / classPoints.length < yourPoints;
}

/* SOLUTION EXPLAINED:
- use .reduce() to find the average test score then return true if the average < yourPoints  */


// SOLUTION 2: 
function betterThanAverage(classPoints, yourPoints) {
  let sum = 0; // declare sum
  for(let i=0 ; i < classPoints.length; i++){ // createnfor loop that goes up to class points
    sum += classPoints[i]; // add sum to every element in the classPoints array
  }
  const average = sum / classPoints.length; // declare the average (sum of all elems / total)
  return yourPoints > average; // return true if yourPoints are better than the average
}
