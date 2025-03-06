function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
  return birds.filter((word) => !geese.includes(word))
};
​
// SOLUTION EXPLAINED: 
// .filter() iterates through every element in the array (word) & creates a new array with the elements that pass the return condition in the CB function
// Then, the function states that if the word is NOT included in the variable geese, return a new array with all the non-geese elements
// The output returns all the elements that were not declared as values in the "geese" variable