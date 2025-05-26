//function to handle errors in a custom way
// This function demonstrates how to handle errors using try-catch
//if b is 0, it throws an error
// This function demonstrates how to handle errors using try-catch

function divide(a, b) {
    try {
        if (b === 0) {
            //throw is used to throw an error and transfer this error to the catch block 
            //new Error() is used to create a new error object
            //object is created and passed to the catch block
            // in this object we pass the message "Division by zero is not allowed."
            //this message is passed to the catch 
            //that catch block with catch this error in a varaible
            //and print the message
        throw new Error("Division by zero is not allowed.");
       //console.log("Error: Division by zero is not allowed.");
            //throw new Error("Division by zero is not allowed.");
        }
        console.log("Result:", a / b);
    } catch (err) {
        console.log("Error:", err.message);
    }
}

//divide(10, 0); // Error: Division by zero is not allowed.
divide(10, 0); // Result: 5
