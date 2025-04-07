// SOLUTION:
const rps = (p1, p2) => {
  if(p1 === 'scissors' && p2 === 'paper' || p1 === 'rock' && p2 === 'scissors' || p1 === 'paper' && p2 === 'rock'){
    return 'Player 1 won!';
  }else if(p1 === 'scissors' && p2 === 'rock' || p1 === 'rock' && p2 === 'paper' || p1 === 'paper' && p2 === 'scissors'){
    return 'Player 2 won!'
  }else{
    return 'Draw!';
  }
};

// Alternative w object:

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  // rules - all winning conditions
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  // if p1(user) - accessing the value (p1) in the obj [rules]
  if (p2 === rules[p1]) { // call obj[key]
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
}; 
