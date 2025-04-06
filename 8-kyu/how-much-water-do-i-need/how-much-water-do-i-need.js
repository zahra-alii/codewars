// SOLUTION:
function howMuchWater(water, load, clothes){
  if (clothes > load*2){
    return 'Too much clothes';
  }else if(clothes < load){
    return 'Not enough clothes'
  }else{
      return Math.round(water * Math.pow(1.1, (clothes - load))*100) / 100; // code to run if clothes & water ratio match  
  }
}

// Alternative with .toFixed()
function howMuchWater(water, load, clothes){
  if (clothes > load*2){
    return 'Too much clothes';
  }else if(clothes < load){
    return 'Not enough clothes'
  }else{
  return Number((water * Math.pow(1.1, clothes - load)).toFixed(2)); // code to run if clothes & water ratio match, return solution to 2 decimal places
  }
}
