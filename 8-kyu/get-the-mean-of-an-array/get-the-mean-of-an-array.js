function getAverage(marks){
  let sum = marks.reduce((acc, c) => acc + c, 0)
  let average = sum / marks.length;
  return Math.floor(average);
}
​
/* SOLUTION EXPLAINED:
- declare sum var (using .reduce() )
- declare var for average (sum / total elements in array)
- return the average # rounded down to the nearest whole # */