// SOLUTION:
String.prototype.digit = function() {
  if(this.length !== 1) return false;
  return this >='0' && this <='9';
};
​
/* Solution Explained:
- first step filters out objects that are more than 1 digit & ""
- second step returns objects between 0-9  */

// ALTERNATIVE SOLUTION (regex):
String.prototype.digit = function() {
  return /^\d$/.test(this);
};

/* Explained:
- 'this' = the string
- ^ = start of string
- \d returns a single digit (0-9)
- $ = end of string
- .test checks if input matches condition
*/
