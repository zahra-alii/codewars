// SOLUTION:
function doubleChar(str) {
  return str.split('').map(char => char.repeat(2)).join('');
}
​
/* SOLUTION EXPLAINED:
- split the string/chars passed in
- .map iterates through every individual char 
- for every char, repeat it twice
- then, join the chars back together to get the output 
*/
​