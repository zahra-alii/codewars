// SOLUTION 1: .filter() method
function countSheeps(sheep) {
  return sheep.filter(Boolean).length;
}

// SOLUTION 2: for loop
function countSheeps(sheep){
    let num = 0;
    for(let i=0; i<sheep.length; i++){
        if(sheep[i] === true){
            num++;
        }
    }
    return num;
}
