// SOLUTION:
function sumOfN(n){
    return Array.from(Array(Math.abs(n) + 1), (elem, ind) => (ind + 1) * ind / 2 * (ind > 0 ? Math.sign(n) : 1));
}