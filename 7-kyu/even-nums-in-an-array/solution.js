// SOLUTION 1:
function evenNumbers(array, number) {
  let newArr = [];
  for(let i = 0; i<=array.length; i++){
    if(array[i] % 2 === 0){ // if elem is even...
      newArr.push(array[i]);
    }
  }
  return newArr.slice(-number); // takes input numbers off the end
}

// SOLUTION 2: (use .filter() )
const evenNumbers = (array, number) => array.filter(elem => elem % 2 === 0).slice(-number);
