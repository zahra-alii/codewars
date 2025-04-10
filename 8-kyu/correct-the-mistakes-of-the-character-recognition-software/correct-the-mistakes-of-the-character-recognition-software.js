// SOLUTION:
function correct(str){
  let newStr = ''; // decl empty str
  for(const char of str){
    if (char === '5'){
      newStr += 'S';
    }else if(char === '0'){
      newStr += 'O';
    }else if(char === '1'){
      newStr += 'I';
    }else{
      newStr += char;
    }
  }
  return newStr;
}

// Alternative using regex: 
correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
