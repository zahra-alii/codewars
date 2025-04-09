// SOLUTION:
String.prototype.digit = function() {
  if(this.length !== 1) return false;
  return this >='0' && this <='9';
};
​
/* Solution Explained:
- first step filters out objects that are more than 1 digit & ""
- second step returns objects between 0-9  */