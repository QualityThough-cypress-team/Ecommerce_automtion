//try and catch 
try {//condtion is may throw an error 
    // Code that may throw an error
    result =function test(){
        console.log('Hello World')
   }
      result()  //test() is a function that is not defined
       //console.log(result);
} catch (ram) { //ram is the object that is thrown
   console.error('An error occurred:', ram.message);
} 

//instead of throwing an error in the console or code , we need to catch the error 
//catch(error){}
//strict mode
//example of infinite loop with try and catch   
/*
let i = 0;
try { //this will throw an error
    // Code that may throw an error
    while (i < 5) {
        console.log(i);// this will print 0,1,2,3,4
        // Simulate an infinite loop
        i++;
        if (i === 4) {
            //throw is used to throw an error
            //new Error() is used to create a new error object
           throw new Error('Infinite loop detected');
           // console.log('Infinite loop detected - I am inside the loop');
        }
    }
} catch (error) {   //error is the object that is thrown
    //catch is used to catch the error from throw exist in the try block
    // Handle the error - this will print the error message
    //error.message is used to get the error message from the throw new Error()
    console.error('An error occurred:', error.message);
} //catch the error and print the message   */