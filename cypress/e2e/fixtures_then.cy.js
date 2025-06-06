// i wan to read the data from fixture file with the help of cy.fixture().then()
// then is used to read the data from the fixture file
//cy.fixture().then(function(){   })
describe('Fixtures with then', () => { // test suite for fixtures with then
    beforeEach(function() { // this is a hook that runs before each test case
        // validating whether we do have the fixture file or not

        cy.fixture('users/example.json').should('exist');
        // Load the fixture file before running the tests
           cy.fixture('users/example.json').then((data)=> {
            //read the data from beforeeach hook to test cases
            this.data = data; // store the data in this.data
              // this.data will contain the data from the fixture file
            cy.log("Fixture file loaded successfully"); // printing this statement in the cypress test runner
        });
    })
    it("this is my first test case with then", function() {
     
            cy.log("Data from fixture file: ", this.data);
            cy.log("name from fixture file: ", this.data.name);
            cy.log("age from fixture file: ", this.data.age);
            cy.log("email from fixture file: ", this.data.email);
            cy.log("address from fixture file: ", this.data.address);
            cy.log("city from fixture file: ", this.data.address.city);
            /*cy.log("state from fixture file: ", data.address.state);
            cy.log("zip from fixture file: ", data.address.zip);
            cy.log("country from fixture file: ", data.address.Country);
            cy.log("phone from fixture file: ", data.phone);*/
        
    });

    it("this is my first test case with then", function() {
      
            cy.log("Data from fixture file: ",this.data);
           /* cy.log("name from fixture file: ", data.name);
            cy.log("age from fixture file: ", data.age);
            cy.log("email from fixture file: ", data.email);
            cy.log("address from fixture file: ", data.address);
            cy.log("city from fixture file: ", data.address.city);
            cy.log("state from fixture file: ", data.address.state);
            cy.log("zip from fixture file: ", data.address.zip);
            cy.log("country from fixture file: ", data.address.Country);
            cy.log("phone from fixture file: ", data.phone);
        
   */
   });


   it("ReadFile in cypress", () => {
        cy.readFile('admin.json').then((data) => {
            cy.log("Data from readFile: ", data);
            expect(data).to.have.property('adminname');
            expect(data).to.be.an('object');
            expect(data.adminname).to.equal('admin');
            expect(data).to.have.property('adminemail');
            // is this data.email is equal to admin@yourstore.com 
            expect(data.adminemail).to.equal('admin@yourstore.com');
           // expect(data).to.have.length(3);

            //expect is an assertion library that is used to check the conditions
            //like should assertions in cypress
            //syntax of expect is expect(data).to.have.property('name');

                    });
                    
    })


    it("read the data from readFile with its command", () => {
    
    cy.readFile('admin.json').its('adminname').should('equal', 'admin');
    cy.readFile('admin.json').its('adminemail').should('equal', 'admin@yourstore.com')

    cy.readFile('admin.json').its('adminname').should('not.equal', 'admin1');
    })
   it("wrap command in cypress", () => {
        const data = 
        { 
            name: 'John', 
            age: 30, 
            email: 'admin@yourstore.com' 
        };
        cy.wrap(data)//converting java script data object into cypress chainable object
        //so that i can use this data after wrap command like cypress object
        .should('have.property', 'name') // checking the property name
       //.and('have.property', 'age') // checking the property age
        //.should('have.property', 'email') // checking the property email
        //.should('have.property', 'name', 'John');
        cy.wrap(data).its('age').should('equal', 30);  
        cy.wrap(data).its('email').should('equal', 'admin@yourstore.com');

        //wrap command is used to wrap the data in a cypress chainable object
        //cy.wrap() convert your non cypress code into cypress chainable object
        //suppose you write javascript code and you want to use that code in cypress
        //then you can use cy.wrap() to convert that code into cypress chainable object 
   })

   it("wrap with functions in cypress", () => {
    //create a function in java script to print the sum of two numbers
    function sum(a, b) {
        return a + b;
    }
    function multiply(a, b) {
        return a * b;
    }
    cy.log("Sum of 5 and 10 is: ", sum(5, 10)); // printing the sum of two numbers in the cypress test runner
    //use cy.wrap() to wrap the function and call the function
    cy.wrap(sum(5, 10)).should('equal', 15); // checking the sum of two numbers
    // how to call the function with wrap and invoke command
    cy.wrap(sum).invoke('call', null, 5, 10).should('equal', 15); // calling the function with wrap and invoke command
    cy.wrap(multiply).invoke('call', null, 5, 10).should('equal', 50); // calling the multiply function with wrap and invoke command
})

it("invoke with wrap for the java script function", () => {
//Create an object message with a greeting function

let message = 'hello'
const english = { // english is  an object with greeting function in java script 
  greeting() { //greeting function returns the message
    // this function is used to return the message

    return message
  },
  sum(a, b) { // this is a function to return the sum of two numbers
    return a + b; // this function returns the sum of two numbers
  }
}

setTimeout(() => { //setTimeout is used to change the message after 1 second
  // after 1 second the message will be changed to bye
  message = 'bye'
}, 1000)
//syntax for setTimeout is setTimeout(function, milliseconds)

// initially the english.greeting() returns "hello" failing the assertion.
// .invoke('greeting') tries again and again until after 1 second
// the returned message becomes "bye" and the assertion passes
cy.wrap(english)  //converting the english object into cypress chainable object
.invoke('greeting')// now I want to call the greeting function of english object
//invoke is used to call the functon of the english object
//.should('equal', 'hello') // checking the message is equal to hello
 .should('equal', 'bye')

 cy.wrap(english) // converting the english object into cypress chainable object
 .invoke('sum', 5, 10) // calling the sum function of english object    
 .should('equal', 15) // checking the sum of two numbers is equal to 15 
 })

});

// invoke with jquery methods 
// show()
//trigger()
//hide()
//call()
//focus()
//blur()
// click()
//attributes remove atributes
//val() // to get the value of the input field
