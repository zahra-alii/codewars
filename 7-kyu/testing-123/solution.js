// SOLUTION 1:
let number = function(array){
  let newArr = [];
  if(array.length === 0){
    return []; // default
  }else{
    for (let i = 0; i<array.length; i++){
      newArr.push(i + 1 + ': ' + array[i]); // each index + 1 + elem
    }
}
return newArr;
}
