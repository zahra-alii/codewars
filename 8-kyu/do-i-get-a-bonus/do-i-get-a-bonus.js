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