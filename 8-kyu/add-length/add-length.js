//  SOLUTION:
function addLength(str) {
  return str.split(" ").map(s => `${s} ${s.length}`);
}
​
// SOLUTION EXPLAINED:
// .split() splits strings and puts a space between them
// .map() iterates/targets every element, then returns the string and string length