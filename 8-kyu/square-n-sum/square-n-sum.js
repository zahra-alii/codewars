function squareSum(numbers){
  return numbers.reduce((total, c) => total + c**2, 0);
}