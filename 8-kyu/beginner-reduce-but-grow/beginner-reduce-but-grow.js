// SOLUTION 1: .reduce() method
const grow = x => x.reduce((acc, c) => acc*c)

// SOLUTION 2: For Loop
function grow(x){
    // set total variable to 1
    let prod = 1;
    for(let i=0; i<x.length; i++){
    prod *= x[i]
}
return prod;
}​
