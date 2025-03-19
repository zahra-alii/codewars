// SOLUTION 1:
function swapValues(args){
    let temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}

// SOLUTION 2:
const swapValues = args => args.reverse();
