// SOLUTION 1:
function litres(time) {
  let litres = String(time * 0.5);
  result = '';
  for (let i = 0; i<litres.length; i++){
    if(litres[i] !== '.'){
      result += litres[i]
    }else{
      break;
    }
  }
  return Number(result);
}

// SOLUTION 2: 
function litres(time) {
  return Math.floor(time * 0.5); // rounds down to nearest whole #
}
