import fruits  from "./exportclass.js"; // Importing the fruits class from exportclass.js file
// Importing the fruits class from exportclass.js file

let fruit1 = new fruits("Apple", "Red", "Sweet");
// Creating an instance of the fruits class
// Creating instances of the fruits class with different properties 
let fruit2 = new fruits("Banana", "Yellow", "Sweet");   
let fruit3 = new fruits("Grapes", "Green", "Sour");
let fruit4 = new fruits("Mango", "Yellow", "Sweet");
let fruit5 = new fruits("Orange", "Orange", "Citrus");

let fruit6 = new fruits("Pineapple", "Brown", "Sweet");
let fruit7 = new fruits("Strawberry", "Red", "Sweet");

let fruit8 = new fruits("Blueberry", "Blue", "Sweet");
let fruit9 = new fruits("Watermelon", "Green", "Sweet");
let fruit10 = new fruits("Peach", "Pink", "Sweet");
console.log(fruit1.getFruitDetails());
console.log(fruit2.getFruitDetails());
console.log(fruit3.getFruitDetails());

console.log(fruit4.getFruitDetails());
console.log(fruit5.getFruitDetails());
console.log(fruit6.getFruitDetails());


console.log(fruit7.getFruitDetails());
console.log(fruit8.getFruitDetails());

console.log(fruit9.getFruitDetails());

console.log(fruit10.getFruitDetails());
// console.log(fruit1.getFruitDetails())

//specific export required specific import
//export class fruits{}  => // import { fruits } from "./exportclass.js"; // Importing the fruits class from exportclass.js file
//export default fruits; import fruits from "./exportclass.js"; // Importing the fruits class from exportclass.js file