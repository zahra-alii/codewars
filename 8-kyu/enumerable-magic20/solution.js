// SOLUTION 1:
function eachCons(array, n) {
  return array.map((x, y) => array.slice(y, y + n)).filter(x => x.length === n);
}

// SOLUTION 2:
function eachCons(array, n) {
  let newArr = [];
  for(let i=0; i<= array.length - n; i++){
    newArr.push(array.slice(i, i+n));
  }
  return newArr;
  }

/* SOLUTION EXPLAINED:
- Declare empty array
- set for loop that goes through array length - n */
