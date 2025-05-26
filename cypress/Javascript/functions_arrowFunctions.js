const printMessage = () => console.log("Hello, I am a tester");

printMessage();
// Arrow function is a shorter syntax for writing function expressions
// Arrow functions are anonymous and change the way this binds in functions
// Arrow functions are always anonymous
// Arrow functions are not hoisted  
//addition of arrow functions
// Arrow functions are not hoisted
const add = (a, b) => a + b; //outcome is sum of a and b
// Arrow function with a single parameter does not require parentheses
// If the function has only one parameter, you can omit the parentheses around the parameter
const sum = add(5, 10);
console.log("The sum is:", sum); //
const multiply = (a, b) => a * b;
const product = multiply(5, 10);   //outcome is 50  
// outcome is product of a and b
// Arrow function with no parameters requires parentheses

console.log("The product is:", product);
const divide = (a, b) => a / b;     
const quotient = divide(10, 5);// outcome is 2
console.log("The quotient is:", quotient);  
const subtract = (a, b) => a - b;
const difference = subtract(10, 5);     // outcome is 5
console.log("The difference is:", difference);
const square = (a) => a * a;
const squaredValue = square(5);// outcome is 25
console.log("The squared value is:", squaredValue);
const cube = (a) => a * a * a;
const cubedValue = cube(5);// outcome is 125
console.log("The cubed value is:", cubedValue);
function cube1(a){
  return a * a * a;
}   
console.log("The cubed value is:", cube1(5)); // outcome is 125 
