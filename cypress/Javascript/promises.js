function getChocolate() { //create a function that returns a promise
  // This function simulates a check for chocolate availability 
    // and returns a promise that resolves or rejects based on availability
  return new Promise((resolve, reject) => {
    //new Promise() is used to create a new promise
    //resolve() is used to resolve the promise  //then() is used to handle the resolved promise
    //reject() is used to reject the promise//catch() is used to handle the rejected promise

    console.log("Mom is checking for chocolate... 🍫");
//setTimeout() is used to delay the execution of the
//  code inside it
    setTimeout(() => {// Simulate a delay of 2 seconds
      //setTimeout() is used to delay the execution of the code inside it
        //setTimeout() is used to delay the execution of the code inside it
        // This simulates a check for chocolate availability
        // In a real-world scenario, this could be an API call or some other async operation
        // For this example, we'll use a simple boolean variable
        // Simulate checking for chocolate availability
    
      let chocolateAvailable = true; // Change this to false to see rejection

      if (chocolateAvailable) {
        resolve("when condition met - Yay! Here's your chocolate! 🍫");
      } else { //false
        // If chocolate is not available, reject the promise
        reject("This is used to print the error messages: Sorry, no chocolate today. 😢");
      }
    }, 5000); // Wait 5 seconds
  });
}	

getChocolate()//calling the function with retrun value as promise
  //this promise is returned to the then() and catch() method
  .then((msg) => console.log(msg))  // If Promise is resolved
  .catch((err) => console.log(err));    // If Promise is rejected
