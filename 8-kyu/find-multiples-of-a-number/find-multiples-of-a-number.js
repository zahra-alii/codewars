function findMultiples(int, limit){
    let arr = [];
    for(let i = int; i<=limit; i+=int){
        arr.push(i)
    }
    return arr;
  }
​
/* SOLUTION EXPLAINED:
1 - create new empty array
2 - set for loop that passes through start & end parameters 
3 - push every elem that matches the condition into new array
4 - return new array */
​
​
​
