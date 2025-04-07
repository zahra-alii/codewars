// SOLUTION:
function toCsvText(array) {
  const withCommas = array.map(n => n.join(','));
  return withCommas.join('\n');
}