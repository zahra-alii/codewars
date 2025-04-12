// SOLUTION:
function expressionMatter(a, b, c) {
  const newArr = [];
  newArr.push(a + b + c);
  newArr.push(a * b * c);
  newArr.push(a + b * c);
  newArr.push((a + b) * c);
  newArr.push(a * b + c);
  newArr.push(a * (b + c));
  return Math.max(...newArr);
}