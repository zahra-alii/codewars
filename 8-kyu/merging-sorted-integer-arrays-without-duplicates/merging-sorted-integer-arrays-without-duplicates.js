function mergeArrays(a, b) {
  return [...new Set(a.concat(b).sort((x,y) => x - y))];
}
​
// new set gives you a new array + no duplicates
​