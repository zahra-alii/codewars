// SOLUTION:
function nearestSq(n){
  let numSquared = 1;
  let squared = Math.pow(numSquared, 2);
  while (squared < n) {
    numSquared += 1;
    squared = Math.pow(numSquared,2);
  }
    const prevSquared = Math.pow(numSquared-1, 2);
    const diff = Math.abs(n - squared);
    const prevDiff = Math.abs(n - prevSquared);
    if (diff > prevDiff){
      return prevSquared;
    }
    return squared;
}