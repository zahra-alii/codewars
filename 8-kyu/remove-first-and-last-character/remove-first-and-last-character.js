// Solution 1:
function removeChar(str){
  return str.slice(1,-1); // -1 = same as "str.length - 1"
};
​
// Solution 2:
 function removeChar(str){
    str = str.split("")
    str.shift(); // removes first char
    str.pop(); // removes last char
    str = str.join("") // joins new str together
    return str;
 }​
​
