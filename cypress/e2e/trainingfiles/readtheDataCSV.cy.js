const neatCSV = require('neat-csv'); // this is the package to parse CSV files
//parsing csv files in cypress with the help of neat-csv package
// This code reads a CSV file and logs the name and email of a random contact from the
//  CSV data
// cy.fixture() is used to load the fixture file => csv file 
// neat-csv is used to parse the CSV file into JSON format
// converting csv file into JSon format by the help of neat-csv package
//cy.fixturre().neatCSV() is used to load the fixture file and parse it into JSON format
// now the out come coming from the neatCSV is in JSON format
//cy.fixture().neatCSV().then(data => { this.data = data; })

// then we can use the data in the then block
/// <reference types="cypress" />  
// this is used to tell cypress that we are using cypress commands in this file
describe('Read CSV data from neat-csv package', () => {
  let table; // we declate a variable with name table , rows and columns of the csv file will be stored in this variable
  // table will contain the data from the CSV file in JSON format

  before(() => { // it will load  the code before running the tests and only before  your first test 
    // cy.fixture() is used to load the fixture file
    // neat-csv is used to parse the CSV file into JSON format
    cy.fixture('testData.csv') //load the testData.csv file from fixtures folder
      .then(neatCSV) // to process this csv file we need to used neat-CSV package 
      // this package will convert this csv file into JSON format 
      .then(data => { // this converted json data will be stored in the data variable
        // now we can use this data in our tests
        table = data; // all the converted json data will be stored in the table variable
        // now we can use this table variable in our tests
      });
  });
//loadign the csv file and converting it into JSON format is done in the before block
// before block will run only once before all the tests in this suite
// now we can use this table variable in our tests
  it('Fill input fields using CSV data', () => {
    // to use this data in our tests we need to use the table variable
    // table variable will contain the data from the CSV file in JSON format
    // we can access the data from the table variable
    // we can access the data from the table variable using the column name
    //coulmn name in csv file username,age,Qualificaton,company
    //table.username will give us the username column data
    //table.age will give us the age column data
    //table.Qualification will give us the Qualification column data
    //table.company will give us the company column data
    // to get the specific row data we can use table.username[0] to get the first row data
    //to get the fifth row data we can use table.username[4]
    //array of objects will be created from the csv file - array index should start from 0
    // how to read the data from csv file 
    //1. import the neat-csv package
    //2. use cy.fixture() to load the fixture file
    //3. use neatCSV to parse the CSV file into JSON format
    //4. use then block to store the data in a variable
    //5. use the variable in our tests to access the data from the CSV file
    //const randomRow = Math.floor(Math.random() * table.length);

    //cy.log(table[randomRow]['name']);
    //cy.log(table[randomRow]['email']);
   cy.log("Name from CSV file: ", table[2]['username']);
    // read the username from the CSV file
    cy.log("Age from CSV file: ", table[2]['age']);
    // read the age from the CSV file 
//username,age,Qualification,company
    // read the Qualification from the CSV file
    cy.log("Company from CSV file: ", table[2]['company']);
    cy.log("Company from CSV file: ", table[2]['test']);   // read the company from the CSV filess

  });


  it("Read the csv data in the for loop", () => {

    cy.log("Reading the data from the CSV file in the for loop");
    cy.log("what is the table variable: ", table);
    cy.log("Length of the table variable: ", table.length);

    // we can use the for loop to read the data from the CSV file
    // we can use the for loop to read the data from the table variable
    // table variable will contain the data from the CSV file in JSON format
    // we can access the data from the table variable using the column name
    // we can access the data from the table variable using the index
    // we can use the for loop to iterate over the table variable
    for (let i = 0; i < table.length; i++) { 
     cy.log("Name from CSV file for iteratio $i: ", table[i]['username']);
      cy.log("Age from CSV file: ", table[i]['age']);
     cy.log("Company from CSV file: ", table[i]['company']);
     cy.log("Qualification from CSV file: ", table[i]['Qualification']);
     setTimeout(() => {
        cy.log("This is a timeout for 2 seconds",i);
      }, 2000); // this will wait for 2 seconds before executing the next line of code  
cy.log("This is a timeout for 2 seconds",i);
    }
  });
  
  it("read the data from random number of rows", () => {
   
    //random number in javascript is generated using Math.random() function
    // Math.random() will generate a random number between 0 and 1
    //cy.log("random number between o to 1 ",Math.random())
    cy.log( Math.random()) // a random number between 0 and 1
    cy.log("random number between 0 to 10", Math.floor(Math.random()*10)) // a random number between 0 and 9
    cy.log("random number between 0 to 100", Math.floor(Math.random() * 100))
     // a random number between 0 and 100
     cy.log("a random number between 0 to 20", Math.floor(Math.random() * 20))
      // a random number between 0 and length of the 20
      // I want to generate a random number between 0 and length of the table variable
      cy.log("a random number between 0 to length of the table variable", Math.floor(Math.random() * table.length)) 
      // generate a random number between 0 and length of the table variable
      cy.log("read the username from the random row", table[Math.floor(Math.random() * table.length)]['username'])

  })
})

