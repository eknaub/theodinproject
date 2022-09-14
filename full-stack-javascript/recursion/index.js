/*
Question 1: Sum all numbers
Write a function called sumRange. It will take a number and 
return the sum of all numbers from 1 up to the number passed in.
*/

function sumRange(n, total = 0) {
  if(n === 0) {
    return total;
  }
  else {
    return sumRange(n - 1, total + n);
  }
}

/*
Question 2: Power function
Write a function called power which takes in a base and an exponent. 
If the exponent is 0, return 1.
*/

function power(base, exponent) {
  if(exponent === 0) {
    return 1;
  }
  else {
    return base * power(base, exponent - 1);
  }
}

/*
Question 3: Calculate factorial
Write a function that returns the factorial of a number. 
As a quick refresher, a factorial of a number is the result 
of that number multiplied by the number before it, and the number 
before that number, and so on, until you reach 1. The factorial of 1 is just 1.
*/

function factorial(n) {
  if(n === 1) {
    return 1;
  }
  else {
    return n * factorial(n-1);
  }
}
