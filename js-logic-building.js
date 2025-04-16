// Factorial of a given number

const factorialOfnum = (num) => {
  let fact = 1;
  for (let i = num; i >= 1; i--) {
    fact *= i;
  }
  return fact;
};
console.log(factorialOfnum(5));

console.log("Just a commits flow");
