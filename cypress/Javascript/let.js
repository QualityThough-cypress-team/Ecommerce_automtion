 {
    // console.log(b); // ReferenceError: Cannot access 'b' before initialization
    let b = 20; // with in the block you declared 
    // this b shold not be used outside of this {} block scope 
    //console.log(b); // 20
 
  //let b //declare b  // canot redeclare as it is a blocked scope varaible
console.log(b) // I am using variable b out of the  scope


  //1. let is having the blocked scope 
 }
  
 if (true) {
    let y = 30;
    console.log(y);
  }
  //console.log(y); // ReferenceError: y is not defined (y is only available inside the block)
  