function sumStr(a,b) {
  if (a === "") a = 0;
  if (b === "") b = 0;
  return `${parseInt(a) + parseInt(b)}`;
}
​
/* SOLUTION EXPLAINED:
- turn the strings into numbers using parseInt() function
- put temporal literals around the integers to make the output a string again */