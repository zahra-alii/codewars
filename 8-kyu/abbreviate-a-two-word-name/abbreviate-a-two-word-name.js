// SOLUTION:
function abbrevName(name){
  let [first, last] = name.split(" ") // decl 2 vars in 1 array, set equal to name.split(' ')
  return `${first[0].toUpperCase()}.${last[0].toUpperCase()}`; // return first index of each var, make both uppercase
}