// SOLUTION:
String.prototype.toAlternatingCase = function () {
  let newStr = ""; // decl newStr
  for(const char of this){
    if(char === char.toUpperCase()){ // if char = uppercase
      newStr += char.toLowerCase();
    }else{
      newStr += char.toUpperCase();
    }
  }
  return newStr;
}