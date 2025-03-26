// SOLUTION 1: 
function sixToast(num) {
  return num >= 6 ? num - 6 : 6 - num;
}

// SOLUTION 2:
function sixToast(num) {
  return Math.abs(num - 6);
}
