//how to export and import the class in javascript
// export class myFirstJS { }
//export keyword is used to export the class => that means I can extended the class usage in another file

// import { myFirstJS } from './myFirstJS.js'; 
// //import keyword is used to import the class
// import and export are used to import and export the class
// //import is used to import the class from another file
//currently my class person is not exported can u use the class in another file - no
import { Person } from './classes.js';

const person = new Person("John", 30); // Create an instance of the Person class
person.greet(); // Call the greet method of the Person class    
person.test(); // Call the test method of the Person class
// Create an instance of the Student class
const student = new Student("Alice", 20, "S12345"); // Create an instance of the Student class
student.greet(); // Call the greet method of the Student class
