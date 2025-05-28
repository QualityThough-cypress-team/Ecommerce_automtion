describe('Fixtures test suite  ', () => {
    //I want to create before hook to load the fixture file
    before(() => {
        cy.fixture('example').should('exist');
        //in this location -> cypress\fixtures\example1
        //cypres try to load the fixture file from the fixtures folder
        //> .json, .js, .coffee, .html, .txt, .csv, .png, .jpg, .jpeg, .gif, .tif, .tiff, .zip
        //extensions supported by the fixture file

    });
    it("this is my first test case", () => {
        console.log("this is my first test case");
    })
    it("this is my second test case", () => {
        console.log("this is my second test case");
    } )  
    it("this is my third test case", () => {
        console.log("this is my third test case");
    });
})

//This test file contians one before hook to load the fixture file
//and three test cases to print the console logs
