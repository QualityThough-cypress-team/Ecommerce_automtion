//math functions in javascript
console.log("Math constants Pi:", Math.PI);
console.log("Math constants E:", Math.E);
console.log("Math constants Golden Ratio:", (1 + Math.sqrt(5)) / 2);
console.log("Math constants Square Root of 2:", Math.SQRT2);
console.log("Math constants Square Root of 3:", Math.SQRT3);
console.log("Math constants Square Root of 1/2:", Math.SQRT1_2);
console.log("Math constants Square Root of 1/3:", Math.SQRT1_3);
console.log("Math object to select random number between 0 and 1:", Math.random());
console.log("Math object to select random number between 0 and 100:", Math.floor(Math.random() * 100));
function add(a, b) { //addition function
    //this function takes two arguments a and b 
    //and returns the sum of a and b
    return a + b;
}
function subtract(a, b) {//subtraction function
    //this function takes two arguments a and b 
    //and returns the difference of a and b
    return a - b;
}
function multiply(a, b) {//multiplication function
    //this function takes two arguments a and b
    //and returns the product of a and b
    return a * b;
}
function divide(a, b) {//division function
    //this function takes two arguments a and b
    //and returns the quotient of a and b
    //if b is 0, it throws an error
    //this error is caught in the catch block
    //and the message is printed
    //if b is not 0, it returns the quotient of a and b
    
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}       
function modulus(a, b) { //modulus function to get the remainder
    //this function takes two arguments a and b
    //and returns the remainder of a divided by b
    //if b is 0, it throws an error
    return a % b;
}
function exponent(a, b) { //exponent function to get the power
    //all these mathemical functions avaialblein javascript - Math object is having all 
    //the mathematical functions
    //this function takes two arguments a and b
    //and returns a raised to the power of b
    
    return Math.pow(a, b); //returns a^b 
}
function squareRoot(a) {
    if (a < 0) {
        throw new Error("Cannot calculate square root of a negative number.");
    }
    return Math.sqrt(a); //returns square root of a Math.sqrt(a) is already a function in javascript , we do not want to create again

}   
function absolute(a) {
    return Math.abs(a); //returns absolute value of a - what is absolute value of -56   
    //absolute value is 56
}
function round(a) {
    return Math.round(a); //retruns the value of a rounded to the nearest integer
}
function ceil(a) {
    return Math.ceil(a); //retrun the value of a rounded to the nearest integer
    //if a is 5.4, it returns 6
}
function floor(a) {//floor function to get the floor value
    return Math.floor(a); //example - if a is 5.4, it returns 5
    //floor function is used to get the floor value of a number
    //5.9 will be 5
    //5.1 will be 5
}
function random() {
    return Math.random(); //returns a random number between 0 and 1
}
function max(a, b) {
    return Math.max(a, b);
    //retruns the maximum of value of supplied numbers
    //if a is 5 and b is 10, it returns 10
}
function min(a, b) {
    return Math.min(a, b); //returns the minimum of value of supplied numbers
    //if a is 5 and b is 10, it returns 5
}
function log(a) {
    return Math.log(a);//returns the natural logarithm of a number
    //if a is 10, it returns 2.302585092994046
}
function sin(a) {
    return Math.sin(a);//returns the sine of a number
}   //returns the sine of a number
function cos(a) {//returns the cosine of a number
    //this function takes one argument a
    return Math.cos(a); 
}
function tan(a) {
    return Math.tan(a);
}

function factorial(n) { // an interview question 
    //wrtie a Javascript code to find the factorial of a number
    //factorial of a number is the product of all positive integers less than or equal to that number
    //for example, factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120
    //factorial of 0 is 1
    if (n < 0) { //factorial of a negative number is not defined
        //if n is negative, it throws an error
        throw new Error("Cannot calculate factorial of a negative number.");
    }
    if (n === 0 || n === 1) { //either 0 or 1
        //if n is 0 or 1, it returns 1  
        return 1;
    }
    return n * factorial(n - 1); // Recursive function to calculate factorial
    //5! = 5 * 4 * 3 * 2 * 1 = 120
    //4! = 4 * 3 * 2 * 1 = 24   
    //3! = 3 * 2 * 1 = 6
    //2! = 2 * 1 = 2
    //1! = 1
}
function power(base, exponent) {
    return Math.pow(base, exponent);
}
function square(a) {
    return a * a;
}
function cube(a) {
    return a * a * a;
}
function isEven(a) { //function to check if a number is even
    // this is also an interview question
    //if a is even, it returns true
    //if a is odd, it returns false
    return a % 2 === 0;
}
function isOdd(a) {
    return a % 2 !== 0;
}
//an interview question in Java script can you write a code to print the even numbers available in bte 1 to 10

function isPrime(num) {
    //define the prime number in maths 
    //a prime number is a natural number greater than 1 
    // that cannot be formed by multiplying two smaller natural numbers
    //for example, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 are prime numbers
    //1 is not a prime number
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function gcd(a, b) {
    //greatest common divisor
    //this function takes two arguments a and b
    //what gcd with example
    //gcd of 12 and 15 is 3
    //gcd of 12 and 18 is 6
    //gcd of 12 and 20 is 4
    if (b === 0) return a;
    return gcd(b, a % b);
}
function lcm(a, b) {
    //lcm of two numbers
    //lcm of 12 and 15 is 60
    //how to fin LCM in maths
    //lcm of 12 and 18 is 36
    //lcm of 12 and 20 is 60
    return (a * b) / gcd(a, b);
}   
function fibonacci(n) {
    //what is fibonacci series
    //fibonacci series is a series of numbers in which each number is the 
    // sum of the two preceding ones
    //usually starting with 0 and 1
    //for example, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
    if (n <= 0) return []; 
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const fib = [0, 1];
    for (let i = 2; i < n; i++) { //for loop to generate fibonacci series
        //this loop starts from 2 and goes to n
        fib.push(fib[i - 1] + fib[i - 2]);
        //push is used to add the new number to the array
        //fib[i - 1] + fib[i - 2] is used to get the next number in the series  
        //fib[0] + fib[1] = 0 + 1 = 1
        //fib[1] + fib[2] = 1 + 1 = 2
        //fib[2] + fib[3] = 1 + 2 = 3
        //fib[3] + fib[4] = 2 + 3 = 5
        //fib[4] + fib[5] = 3 + 5 = 8
        //fib[5] + fib[6] = 5 + 8 = 13
    }
    return fib;
}
function primeFactors(n) {
    const factors = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    if (n > 1) factors.push(n);
    return factors;
}
function lcmOfArray(arr) {
    return arr.reduce((lcm, num) => (lcm * num) / gcd(lcm, num), 1);
}
function sumOfArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}


console.log("Addition of 5 and 10:", add(5, 10));
console.log("Subtraction of 10 and 5:", subtract(10, 5));

console.log("Multiplication of 5 and 10:", multiply(5, 10));
console.log("Division of 10 and 5:", divide(10, 5));

console.log("Modulus of 10 and 5:", modulus(10, 5));
console.log("Exponent of 5 and 2:", exponent(5, 2));
console.log("Square root of 25:", squareRoot(25));

console.log("Absolute value of -5:", absolute(-5));
console.log("Round value of 5.4:", round(5.4));
console.log("Ceil value of 5.4:", ceil(5.4));
console.log("Floor value of 5.4:", floor(5.4));
console.log("Random number between 0 and 1:", random());
console.log("Max of 5 and 10:", max(5, 10));
console.log("Min of 5 and 10:", min(5, 10));
console.log("Log of 10:", log(10));
console.log("Sine of 30 degrees:", sin(30));
console.log("Cosine of 30 degrees:", cos(30));
console.log("Tangent of 30 degrees:", tan(30));
console.log("Factorial of 5:", factorial(5));
console.log("Power of 5 and 2:", power(5, 2));
console.log("Square of 5:", square(5));
console.log("Cube of 5:", cube(5));
console.log("Is 5 even?", isEven(5));
console.log("Is 5 odd?", isOdd(5));
console.log("Is 5 prime?", isPrime(5));
console.log("GCD of 12 and 15:", gcd(12, 15));
console.log("LCM of 12 and 15:", lcm(12, 15));
console.log("Fibonacci series of 10:", fibonacci(10));
console.log("Prime factors of 28:", primeFactors(28));
console.log("LCM of array [12, 15, 20]:", lcmOfArray([12, 15, 20]));


console.log("Sum of array [1, 2, 3, 4, 5]:", sumOfArray([1, 2, 3, 4, 5]));

// This code demonstrates various mathematical functions in JavaScript
// including addition, subtraction, multiplication, division, and more.
// It also includes error handling for division by zero and negative square roots.
// The code is organized into functions for better readability and reusability.
// The functions cover a wide range of mathematical operations
console.log("random value between 2 to 10:", Math.floor(Math.random() * (10 - 2 + 1)) + 2);
let x=2
let y=10
Math.floor(Math.random() * (y - x + 1)) + x
y-x+1
// This code demonstrates how to generate a random number between two values (x and y)
// The Math.random() function generates a random number between 0 and 1
// The Math.floor() function rounds down the result to the nearest integer

// This code generates a random number between x and y (inclusive)
console.log("print the random number between x, y:", Math.floor(Math.random() * (y - x + 1)) + x);
// such as addition, subtraction, multiplication, division, modulus, exponentiation,
// and can be used in various applications.