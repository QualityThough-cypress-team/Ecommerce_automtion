// Example of a simple for loop in JavaScript

// Loop from 1 to 5 and print each number
/*for (let i = 1; i <= 5; i++) {
    console.log("Number:", i); // first time i=1, second time i=2, third time i=3, fourth time i=4, fifth time i=5
    // i is incremented by 1 in each iteration

    // The loop will run until i is less than or equal to 5
    // The loop will stop when i becomes 6
    //6 is not less than or equal to 5
    // The loop will stop when i becomes 6
}

// Example: Loop through an array
const fruits = ["Apple", "Banana", "Cherry", "pineapple","Date", "Elderberry"];
// Declare an array of fruits
fruits.unshift("Mangoes","Grapes") //unshift is used to add a new element at the beginning of the array
//unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.  
// The unshift() method changes the original array.
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.push("Oranges","Pomegranate") //push is used to add a new element at the end of the array
console.log("Fruits:", fruits);
console.log("Fruits length:", fruits.length); //length of the array
// Loop through the array using a for loop

for (let i = fruits.length-1; i >= 0; i--) {
    //array indexing starts from 0
    //i=0, i=1, i=2
    //array.length =>Gets or sets the length of the array.
    //  This is a number one higher than the highest index in the array.


    console.log("I am in For loop as a Fruit:", fruits[i]);
    //fruits[i] => first time i=0 => fruits[0] => Apple
    //second time i=1 => fruits[1] => Banana
    //third time i=2 => fruits[2] => Cherry
    //fourth time i=3 => fruits[3] => undefined
    //fifth time i=4 => fruits[4] => undefined
}


// Example: Loop with a decrementing counter
for (let i = 5; i > 0; i--) {
    console.log("Countdown:", i);
}
    
// Example: Loop with a step value   i= i+2 i+=2
for (let i = 0; i <= 10; i += 2) {
    console.log("Even Number:", i);
}
console.log("Odd numbers are:");
for (let i = 1; i <= 10; i += 2) {
    console.log("ODD Number:", i);
}


//2. for in loop
// The for-in loop is used to iterate over the properties
//  of an object
// Example: Loop through an object
const person = {
    name: "John",
    age: 30,
    city: "New York"
}; // person is an object and stores the values of name, age and city
// The person object has three properties: name, age, and city
//for in loop is used to iterate over the properties of an object
// Loop through the object properties using a for-in loop

console.log("Person object:", person);
//console.log("Person object length:", Object.keys(person).length);
//console.log("Person object length:", person.length); //undefined
//length of the object
//Object.keys() method returns an array of a given object's own enumerable property names, in the same order as we would get with a normal loop.    
console.log(person.name); // John
console.log(person.age); // 30      
console.log(person.city); // New York
console.log(person["name"]); // John
console.log(person["age"]) // 30
console.log(person["city"]) // New York

for (let key in person) {
    //for(declare a varaible in object) {
    // The for-in loop is used to iterate over the properties of an object

    //regular for loop is used to iterate over the properties of an object
    // The key variable will hold the property name
    // The person[key] will give the value of that property
    //key is the property name
    //person[key] is the value of that property
    //for (initialization; condition; increment/decrement) {
    // The loop will run until the condition is true
    console.log("Key:", key); //key is the property name
    console.log(key + ": " + person[key]);
}         
*/
const fruits={
    name: "apple",
    price: 30,
    Type: "Organic",
    Shape: "Round",
    color: "Red",
    taste: "Sweet"
}
//I want to print the object values by using for in loop

for(let key in fruits) {
    console.log("My property is:"+ key + " and : "+" MY value is:" + fruits[key]);
}

//3. for of loop
// The for-of loop is used to iterate over iterable objects 
// such as arrays, strings, maps, sets, and more
// Example: Loop through an array using for-of loop
const colors = ["Red", "Green", "Blue", "Yellow"];
colors.unshift("Black","White") //unshift is used to add a new element at the beginning of the array
colors.push("Pink","Purple") //push is used to add a new element at the end of the array
colors.shift() //shift is used to remove the first element from the array
colors.pop() //pop is used to remove the last element from the array
console.log("Colors:", colors); // The colors array has five elements: Black, White, Red, Green, Blue, Yellow
//length of the array = 4   
console.log("Colors length:", colors.length); //length of the array
// The colors array has four elements: Red, Green, Blue, Yellow
/* for(let i=0; i<colors.length; i++) {
    console.log("I am in For loop as a Color:", colors[i]);
}*/
// The for-of loop is used to iterate over iterable objects
for(let i of colors) {
    //for (let variable of iterable) {
    // The variable will hold the value of each element in the iterable
    console.log("I am in For of loop as a Color:", i);
}

//summary of the lecutre : 
//1. For loops is used to iterate over a range of numbers or an array or object properites  
//2. For in loop is used to iterate over the properties of an object
//3. For of loop is used to iterate over iterable objects such as arrays,
//  strings, maps, sets, and more
let string = "Automation Testing";
// The for-of loop is used to iterate over iterable objects
for (let char of string) {
    // The char variable will hold the value of each character in the string
    console.log("Character:", char);
}
console.log("String length:", string.length); //length of the string
for(i=0; i<string.length; i++) {
    console.log("Character:", string[i]);
}   
//for of is used to sets and maps
//use sets and maps with for of loop

//4. forEach loop
// The forEach() method executes a provided function once for each array element
// Example: Loop through an array using forEach
const numbers = [1, 2, 3, 4, 5];
// The numbers array has five elements: 1, 2, 3, 4, 5
//length of the array = 5
console.log("Numbers:", numbers); // The numbers array has five elements: 1, 2, 3, 4, 5
console.log("Numbers length:", numbers.length); //length of the array
// The forEach() method executes a provided function once for each array element
numbers.forEach((number) => {
    // The number variable will hold the value of each element in the array
    console.log("Number:", number);
}); 

let fruits1 = ["Apple", "Banana", "Cherry", "Date"];
fruits1.unshift("Mangoes","Grapes")
 //unshift is used to add a new element at the beginning of the array
// The fruits1 array has four elements: Apple, Banana, Cherry, Date
fruits1.push("Oranges","Pomegranate") //push is used to add a new element at the end of the array
fruits1.forEach((number)=>{

    //console.log("Fruits:", fruits1);
    console.log("my furits is:", number);
    // The fruits1 variable will hold the value of each element in the array
    // The fruits1 variable will hold the value of each element in the array
    // The fruits1 variable will hold the value of each element in the array
})

fruits1.forEach((number)=>{
    console.log("myfruits are:", number);   

})