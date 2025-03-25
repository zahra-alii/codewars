// SOLUTION 1:
function multiTable(number) {
  return [...Array(10)].map((elem, index) => `${index + 1} * ${number} = ${(index + 1) * number}`).join('\n')
}
​
/* Steps:
- Array() stores the numbers under single array
- .map() iterates over every elem & index */

// SOLUTION 2:
function multiTable (number){
  let table = ""; // decl empty str

  for(let i=1; i<=10; i++){
    table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
  }
  return table;
}
