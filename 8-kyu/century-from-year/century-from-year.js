// SOLUTION:
function century(year) {
  if (year.toString().length < 3){
    return 1;
  }
  const lastTwoDigits = +year.toString().slice(0,-2);
  if(year % 100 === 0){
    return lastTwoDigits;
  }else{
  return lastTwoDigits + 1;
    }
}

// Alternative:
const century = year => Math.ceil(year/100)
