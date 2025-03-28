// SOLUTION 1:
const sequenceSum = (begin, end, step) => {
let total = 0; // decl total 
for (let i = begin; i<=end; i+=step){ // iterate through each parameter 
total += i; // add each element in the sequence together
}
return total;
};

// SOLUTION 2:
const sequenceSum = (begin, end, step) => begin > end ? 0 : begin + sequenceSum(begin + step, end, step);
// using recursion
