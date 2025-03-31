// SOLUTION:
function nameShuffler(str){
  let [first, last] = str.split(' ');
  return last + ' ' + first;
}