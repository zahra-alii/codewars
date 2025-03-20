function divisibleBy(numbers, divisor){
    return numbers.filter(x => x % divisor === 0);
}
​
/* SOLUTION EXPLAINED:
- use .filter() to filter out the elements that DON'T meet condition 
and RETURN every element that is divisble by the divisor (in this case, 2) */