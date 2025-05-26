const c = 30;
console.log(c); // 30

 //c = 40; // TypeError: Assignment to constant variable.
 if (true) {
    const z = 40;
    console.log(z)
  }
  //console.log(z); // ReferenceError: z is not defined (z is only available inside the block)
  
