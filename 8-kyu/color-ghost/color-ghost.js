class Ghost {
  constructor(){
    this.color = ["white", "purple","yellow", "red"][Math.floor(Math.random()*4)] ;
  }
}

/* SOLUTION EXPLAINED:
- when you have a question with instances in it, use "this" keyword on the property
- put every value being passed in into an array
- Math.random() returns random # between 0 to 1
- Multiply by 4 since there are 4 values
- Math.floor() returns largest number <= given number (estimates to the nearest whole #) /*
