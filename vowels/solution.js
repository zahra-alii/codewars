// SOLUTION: 

function isVow(a){
  return a.map(code => {
    let char = String.fromCharCode(code);
    if(["a", "e", "i", "o", "u"].includes(char)){
      return char;
    }else{
      return code;
     }
  })
}

/* SOLUTION EXPLAINED:
- use .map() to iterate through vowels being passed in
- declare char variable & use String.fromCharCode() to return the string as a number that matches the code
- if the vowels include that number/character, return char - else return the default (code) */
