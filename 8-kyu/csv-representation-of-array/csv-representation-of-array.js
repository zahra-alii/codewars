// SOLUTION:
function toCsvText(array) {
  const withCommas = array.map(n => n.join(',')); // removes spaces between every elem
  return withCommas.join('\n'); // with the new elements, add '\n' to output
}


// Alternative:
const toCsvText = array => array.join('\n');
