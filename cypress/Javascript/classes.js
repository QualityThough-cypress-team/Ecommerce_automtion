//Class  declaration => 
// class ClassName {}
export class Person { //declaration of class
    //class is a blueprint for creating objects
    //class is a template for creating objects
    //if you have not create any constructor 
    // then it will create a default 
    // constructor
     constructor(name, age) { 
        //constrcutor is a special method 
        // for creating and initializing an object
        this.name = name; //allice
        //this keyword refers to the current object
        //this.name is the name property of the object
        //this.age  is the name property of the object
        this.age = age;//age
    }

    
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    //$ is usedretrieve the value of the variable 
    //{$this.name} is used to retrieve the value of the name property for the current object

    //greet is a method of the class
    //method is a function that is 
    // associated with an object
    //this.age is the age property of the 
    // object => current object
    //this.name is the name property of
    //  the object => current object
    //this keyword refers to the current object
    //this.greet() is a method of the class
    //this.greet() is used to call the method for the current object
    test(){
        console.log("test method of the class")
    }

}
class Student extends Person { 
    //student is a subclass of Person => child class    
    //extends keyword is used to create a subclass
    constructor(name, age, studentId) {
        super(name, age);  // then only we can call the parent class constructor
        // Call the constructor of the parent class (Person)
        //super is a special keyword to call the constructor of the parent class
        //super() is used to call the constructor of the parent class
        this.studentId = studentId;
    }
    studentGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and my student ID is ${this.studentId}.`);
    }
    //studentId is the studentId property of the object
    //this.studentId is the studentId property of the object
    //this.name is the name property of the object
    //this.age  is the name property of the object  
}

/*
1. class is a blueprint for creating objects - class className {}
2. Class requires constructor to create an object - constructor() {}
3. constructor with arguments - constructor(name, age) {}
4. constructor with default values - constructor(name = "John", age = 30) {}
5. constructor with variable arguments - constructor(...args) {}
6. if you have not create any constructor then it will create a default constructor
7. Class extends another class - class className extends className {}
8. child class inherits parent class - methods and properties
9. super() is used to call the constructor of the parent class
10. this keyword refers to the current object
11. create an instance of the class - new className()
12. assign this new isntance to a variable - const person = new className()
13. retrieve the properties of the object - person.name, person.age
14. call the method of the class - person.greet()
*/
// Create an instance of the Person class - how to  use blueprint (class) to create an object
const person1 = new Person("Alice", 25); //creating an object of the class for the person with name and age
//creating an object of the class for the person with name and age
const person2 = new Person("Bob", 30); //creating an object of the class for the person with name and age
// I want greet the person1
person1.greet(); //calling the method of the class
// I want to get the  name of the person1
console.log(person1.name); // Alice
console.log(person1.age); // 25
person2.greet(); //calling the method of the class
//Greet the person2 => Hello, my name is Bob and I am 30 years old.
// I want to get the  name of the person2
console.log("person2 object's age:",person2.age) // 30
// I want to get the  name of the person2
console.log("person2 object's name:",person2.name) // Bob
//1. define the class  => class Person {}
//2. define the constructor => constructor(name, age) {}
//3. define the properties => this.name = name; this.age = age; //optional
//4. create an instance of the class newPerson()
//5. const person1= new Person()
//6. person1.greet() //calling the method of the class
//7. person1.name //getting the name of the person
//8. person1.age //getting the age of the person

person1.test() //calling the test method of the class
person2.test() //calling the test method of the class
//I want to create an object of the child class student and use the properties and methods of the parent class
const student1 = new Student("Charlie", 20, "S12345"); //
student1.greet(); //calling the method of the class
student1.test() //calling the test method of the class
student1.studentGreet(); //calling the method of the class
//I want to get the name of the student
console.log("student1 object's name:",student1.name) // Charlie
//I want to get the age of the student
console.log("student1 object's age:",student1.age) // 20
//I want to get the studentId of the student

console.log("student1 object's studentId:",student1.studentId) // S12345
const student2 = new Student("Cypress      ", 10, "S67890"); //
student2.greet(); //calling the method of the class
student2.test() //calling the test method of the class
student2.studentGreet(); //calling the method of the class
//I want to get the name of the student
console.log("student2 object's name:",student2.name) // David
//I want to get the age of the student
console.log("student2 object's age:",student2.age) // 22
//I want to get the studentId of the student
console.log("student2 object's studentId:",student2.studentId) // S67890
//I want to get the name of the student