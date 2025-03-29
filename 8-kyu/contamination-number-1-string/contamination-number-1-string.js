// SOLUTION:
function contamination(text, char){
  if(text === "" || char === ""){ // default
    return "";
    }
    let result = ""; // decl empty str
    for (let i = 0; i<text.length; i++){
      result += char;
    }
    return result;
}