// SOLUTION 1:
function points(games){
let total = 0;
games.map(game => {
if(game[0] === game[2]){
total += 1;
}else if(game[0] > game[2]){
total += 3;
}
});
return total;
}

// SOLUTION 2: USING .REDUCE METHOD
const points = games => games.reduce((total, c) => {
    return total += c[0] > c[2] ? 3 : c[0] === c[2] ? 1 : 0;
}, 0);
