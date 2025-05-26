try {
    let num = 10 / 0; // This does not cause an error (Infinity)
    console.log("Result:", num);
} catch (error) {
    console.log("An error occurred:", error.message);
	} finally {
    console.log("This runs whether an error occurs or not.");
}
// //finally block
// //finally block is used to execute the code after try and catch block
