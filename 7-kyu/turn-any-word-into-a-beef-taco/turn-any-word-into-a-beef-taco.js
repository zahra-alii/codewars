function tacofy(word) {
  const keys = {
    a: 'beef',
    e: 'beef',
    u: 'beef',
    i: 'beef',
    o: 'beef',
    t: 'tomato',
    l: 'lettuce',
    c: 'cheese',
    g: 'guacamole',
    s: 'salsa'
  }
  const result = ['shell']
  for (const letter of [...word.toLowerCase()]) {
    if (letter in keys) {
      result.push(keys[letter])
    }
  }
  result.push('shell')
  return result;
}