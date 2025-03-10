function warnTheSheep(queue){
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
  }
​
  /* SOLUTION EXPLAINED:
  - declare new variable for wolf position
  - add .reverse() since position is at front of the queue
  - add .indexOf() to find the wolf position in the array
  - use ternary operator to create conditions
  */