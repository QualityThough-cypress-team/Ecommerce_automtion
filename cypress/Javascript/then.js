function doHomework() {
  return new Promise((resolve, reject) => {
    console.log("Doing homework... 📚");
    
    setTimeout(() => {
        let homeworkStatus=true; // Change this to false to simulate an error
      if(homeworkStatus) {
        resolve("Homework is done! ✅");
      }
        else {
            reject("Homework is not done! ❌");
        }

    }, 3000); // Wait 3 seconds
  });
}

doHomework() //function is returning the promise
  .then((message) => {
    console.log(message); 
    console.log("Now you can play video games! 🎮");
  })
  .catch((error) => {
    console.log(error);
    console.log("You need to finish your homework first! 😢");
  })

  // function () 
  // promise
  // true and false condtion    
  //true then we can use  resolve => then() 
  //false then we can use reject => catch()