function multipleOfIndex(array) {
  return array.filter((x, index) => x % index === 0 || x === 0);
}
​
/* SOL EXPLAINED:
- filter out all elements that don't pass the condition(being a multiple of their own index)
- return the elems that do match that condition (x is divisible by the x) */