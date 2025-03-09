function sum (numbers) {
  return numbers.length === 0 ? 0 : numbers.reduce((total, num) => total + num);
}