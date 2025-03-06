// SOLUTION:

function array(string){
  return string.split(",").slice(1,-1).join(" ") || null;
}
​
// SOLUTION EXPLAINED:
// Use the .split() method to split the comma from the output
// Then, use .slice to remove the first and last characters in the string
// Next, use the .join method to join the strings together with a space in between
// Lastly, set the default output as NULL if string is empty / doesn't match conditions
