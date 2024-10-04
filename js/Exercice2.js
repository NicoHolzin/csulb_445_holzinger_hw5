// Starting with an array containing the numbers 1 through 10, use filter, map and reduce to
// produce the following. Use console.log to display the results.
// a. An array of odd numbers
// b. An array of numbers divisible by 2 or 5
// c. An array of numbers divisible by 3, squared
// i. If the number is divisible by 3, square it
// d. The sum of the following: square the numbers divisible by 5
// A. Asher IS445/545 S01 – Fall 2024 Page 2 of 5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// a. An array of odd numbers
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers);

// b. An array of numbers divisible by 2 or 5
const divisibleBy2Or5 = numbers.filter(num => num % 2 === 0 || num % 5 === 0);
console.log("Numbers divisible by 2 or 5:", divisibleBy2Or5);

// c. An array of numbers divisible by 3, squared
const divisibleBy3Squared = numbers
  .filter(num => num % 3 === 0)
  .map(num => num * num);
console.log("Numbers divisible by 3, squared:", divisibleBy3Squared);

// d. The sum of the following: square the numbers divisible by 5
const sumOfSquaresDivisibleBy5 = numbers
  .filter(num => num % 5 === 0)
  .map(num => num * num)
  .reduce((acc, curr) => acc + curr, 0);
console.log("Sum of squares of numbers divisible by 5:", sumOfSquaresDivisibleBy5);
