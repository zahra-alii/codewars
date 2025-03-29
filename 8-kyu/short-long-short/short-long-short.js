// SOLUTION:
function solution(a, b){
  if(a.length > b.length){
    return b + a + b; // short, long, short
  }else{
    return a + b + a; 
  }
}
​// alternative: could use ternary op
