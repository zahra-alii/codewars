// SOLUTION:
function pillars(numPill, dist, width) {
  if(numPill === 1) return 0; // edge case
  return (dist * (numPill - 1) * 100) + (width * (numPill - 2));
}