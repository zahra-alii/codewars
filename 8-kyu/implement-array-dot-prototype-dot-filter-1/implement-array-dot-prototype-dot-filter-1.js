Array.prototype.filter = function (func) {
  let result = []; // create empty array
  for(let i = 0; i<this.length; i++){ // set for loop that passes thrp
    if(func(this[i])) { // if elem passes the func...
      result.push(this[i]); // push the elem onto the new array (result)
    }
  }
  return result;
}
​