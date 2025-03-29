// SOLUTION:
function lovefunc(flower1, flower2){
  if(flower1 % 2 === 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 === 0){
    return true;
  }else{
    return false;
  }
}

// alternative simple solution:
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2; // one is even, other is odd
}
