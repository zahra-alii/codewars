// Solution:
const outed = (m, b, a = Object.keys(m)) => 
  (a.reduce((a,b) => a + m[b],0) + m[b]) / a.length > 5 ? 
      'Nice Work Champ!' : 'Get Out Now!'
​
// put each key (names) into a new array (Object.keys())
// use .reduce() to find happiness rating
// use ternary op to return desired outputs based on conditionals