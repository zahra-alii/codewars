// SOLUTION:
let countSheep = function (num){
  let str = "";
  for(let i = 1; i<=num; i++){
    str += i.toString() + ' sheep...'; // return every number as a string with the murmur at the end
  }
  return str;
}
