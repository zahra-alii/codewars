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
// Alternative with for loop:
function doubleChar(str) {
  let newStr = '';
  for (let i = 0; i<str.length; i++){
    newStr += str[i] + str[i];
  }
  return newStr;
}
