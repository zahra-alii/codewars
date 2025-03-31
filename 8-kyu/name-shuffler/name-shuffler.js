// SOLUTION:
function nameShuffler(str){
  let [first, last] = str.split(' ');
  return last + ' ' + first;
}

// ALTERNATIVE:
function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}
