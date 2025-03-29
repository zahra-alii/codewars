// SOLUTION:
function digitize(n) {
  return String(n).split('').map(Number).reverse();
}

/* SOLUTION EXPLAINED:
String(n) turns every number into a string [Ex: String(123); // returns "123"]
.split('') splits every character
.map() iterates through each element in the array and turn them back into numbers
.reverse() reverses the array */
