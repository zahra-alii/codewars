// SOLUTION:
const byteToSet = byte => new Set(byte.toString(2).padStart(8, '0').split('').map((elem, index) => +elem ? index : -1).filter(elem => elem !== -1));
​