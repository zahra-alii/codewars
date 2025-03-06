// SOLUTION:
function digitize(n) {
  return String(n).split('').map(Number).reverse();
}

// SOLUTION EXPLAINED:
// String(n) takes the numbers passed into it and makes them a string [Ex: String(123); // returns "123"]
// .split('') splits the new string into an array of strings
// .map() iterates/loops through each element in the array (in this case, Number)
// .reverse() reverses the order of the array altogether
