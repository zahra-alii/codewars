// Solution:
function multiTable(number) {
  return [...Array(10)].map((elem, index) => `${index + 1} * ${number} = ${(index + 1) * number}`).join('\n')
}
​
/* Steps:
- Array() stores the numbers under single array
- .map() iterates over every elem & index */