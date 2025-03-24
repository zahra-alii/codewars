function integrate(coefficient, exponent) {
  return `${coefficient / (exponent + 1)}x^${exponent + 1}`;
}
​
/* SOLUTION EXPLAINED:
- use temporal literals to get output */