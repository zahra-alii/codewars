// SOLUTION:
function bonusTime(salary, bonus) {
  let total;
  if(bonus){
    total = salary * 10;
  }else{
    total = salary;
  }
  return `£${total}`;
}


// ALTERNATIVE:
function bonusTime(salary, bonus) {
  return bonus ? `£${10 * salary}` : `£${salary}`;
}
