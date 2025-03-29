// SOLUTION: 
function billboard(name, price = 30){
  let total = 0; // decl total
  for (let i = 0; i<name.length; i++){
    total += price; // add price to total each time
  }
  return total;
}
​
​
// Alternative solution using "*":
// function billboard(name, price = 30){
//   if(name){
//     return name.length(price);
//   }
// } 