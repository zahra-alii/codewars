function twoSort(s) {
  return s.sort()[0].split('').join('***')
}
​
// SOLUTION EXPLAINED:
// .sort() method sorts the strings alphabetically 
// [0] returns the first value in the array (index 0)
// .split() splits the string
//.join() combines the string again and returns the output with *** between the letters