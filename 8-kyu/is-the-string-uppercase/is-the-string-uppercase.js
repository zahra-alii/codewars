// SOLUTION:
String.prototype.isUpperCase = function() {
  return this == this.toUpperCase();
}
​
// with prototype, the object/string uses "this" 
