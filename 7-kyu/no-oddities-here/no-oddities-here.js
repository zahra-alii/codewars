// SOLUTION 1:
function noOdds( values ){
  let arr = [];
  for(let i=0; i<=values.length; i++){
    if(values[i] % 2 === 0){ // if vals are even...
      arr.push(values[i]); // push them into arr
    }
  }
  return arr;
}

// SOLUTION 2 - use .filter():
function noOdds( values ){
  return values.filter((x) => x % 2 === 0);
}
