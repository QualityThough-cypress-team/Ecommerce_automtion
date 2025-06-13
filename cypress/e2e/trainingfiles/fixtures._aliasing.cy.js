// We need to load the fixtures from the fixtures directory
//we need to cy.fixture() to load the fixture file
// and then we can use the data in the fixture file in our tests
// The fixture file is a JSON file that contains the data that we want to use in our tests
//Json file contains data in key value pair format
// to retrieve the data from the fixture file we need to use cy.fixture() command
// aliasing in the cypress is used to store the data in a variable
// in cypress we use as to alias the data
//example: cy.fixture('example').as('data')
describe('Fixtures', () => { // define the test suite
    // This is a test suite for testing fixtures in Cypress
    beforeEach(() => { // this is a hook that runs before each test case
        cy.fixture('users/example.json').should('exist');
        // read the data from fixture sub folder 
        cy.fixture('users/example.json').should('exist');
        // Load the fixture file before running the tests
        cy.fixture('users/testdata/testdata').as('data'); 
        //testdata exist in the example.json stored in the variable 'data'
        cy.log("Fixture file loaded successfully"); // printing this statement in the cypress test runnner
         });
    it("this is my first test case with function ", function() { // this is a test case
        cy.log("this is my first test case");
        cy.log("Data from fixture file: ", this.data); // read the data from the fixture file
        // this.data will contain the data from the fixture file
        // this is used to retrieve the data from the fixture file
        cy.log("name from fixture file: ", this.data.name); // read the name from the fixture file
        cy.log("age from fixture file: ", this.data.age); // read the age from the fixture file
        cy.log("email from fixture file: ", this.data.email); // read the email from the fixture file
        cy.log("address from fixture file: ", this.data.address); // read the address from the fixture file
        cy.log("city from fixture file: ", this.data.address.city); // read the city from the fixture file
        cy.log("state from fixture file: ", this.data.address.state); // read the state from the fixture file
        cy.log("zip from fixture file: ", this.data.address.zip); // read the zip from the fixture file
        // you can access the data from the fixture file using this.data.address.state
        cy.log("country from fixture file: ", this.data.address.Country); // read the country from the fixture file
        // you can access the data from the fixture file using this.data.address.country
        cy.log("phone from fixture file: ", this.data.phone); // read the phone from the fixture file
    }); 

    //if you want to use this.data then you are not suppose to use () => { } instead use 
    //  function() {} to get out of the errors 
    // if you use arrow function then this.data will be undefined
    // because arrow function does not have its own this context
    // this context is nothing but a reference to the current object
    // in this case, the current object is the test case
    // current test case is not able to find the  this.data if you use arrow function
    // that is the reason we are using function() {} instead of () => { }
        // now with function(){} we can access the this.data
        // why because now it block is having the this context so that you data read from the fixture file 
        
   it.skip("this is my second test case with arrow function", ()=> { // this is a test case
        cy.log("this is my first test case");
        //cy.log("Data from fixture file: ", this.data.); // read the data from the fixture file
        // this.data will contain the data from the fixture file
        // this is used to retrieve the data from the fixture file
        cy.log("name from fixture file: ", this.data.name); // read the name from the fixture file
        cy.log("age from fixture file: ", this.data.age); // read the age from the fixture file
   
    }); 
 
});