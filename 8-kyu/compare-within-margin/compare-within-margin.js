// SOLUTION:
const closeCompare = (a, b, margin = 0) => (Math.abs(a-b) <= margin) ? 0 : (a < b) ? -1 : 1;
​