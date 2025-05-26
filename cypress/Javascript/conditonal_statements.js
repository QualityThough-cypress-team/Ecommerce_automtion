//Conditonal Statements
// 1. if statement
// 2. if else statement
// 3. else if statement
// 4. switch statement
// 5. nested if statement
//what is nested if statement


// 6. ternary operator  //  (condition) ? (true) : (false)    
// 7. logical operators //
// 8. comparison operators //   ==, ===, !=, !==, >, <, >=, <=
// 9. break statement
// 10. continue statement

//1. if statement 
let a = 30;
let b = 20; //compare a and b then we have to use these conditonal statement 
let c = 10; //if we want to check the condition then we can use this variable
//if we have multiple conditons we can use && and || operators
//&& is used to check the both conditions are true or not
//|| is used to check the either of the condition is true or not
if (a > b && c>20) {// here we are checking the condition
    // if the condition is true then this block will be executed
    // if the condition is false then this block will not be executed
  console.log("a is greater than b and cis greater than 20"); // for true condition only this statmeent will execute 
  //if a is greater than b then this statement will be executed
  // for suppose a is less than b then this statement will not be executed
}
if (a > b || c>20) {// here we are checking the condition
    // if the condition is true then this block will be executed
    // if the condition is false then this block will not be executed
  console.log("a is greater than b or c is greater than 20"); // for true condition only this statmeent will execute 
  //if a is greater than b then this statement will be executed
  // for suppose a is less than b then this statement will not be executed
}   

//instead of using 2 ifs we can use if else statement
if (a > b) { //checking the condition if it is true then if block code will be executed
    //if the conditon is false then else block code will be executed
    // if the condition is true then this block will be executed
    console.log("a is greater than b");
}   else {//if condition is false then this block will be executed
    console.log("a is less than b");
}
//if -else statement is used to check the condition 
//if the condition is true then it block will be executed
//if the condition is false then else block will be executed
//if we have multiple conditions then we can use else if statement
//2. else if statement
if (a > b) { //checking the condition if it is true then if block code will be executed 
    //if the conditon is false then else block code will be executed
    // if the condition is true then this block will be executed
    console.log("a is greater than b");
}
else if (a < b) { //checking the condition if it is true then else if block code will be executed 
    //if the conditon is false then else block code will be executed
    // if the condition is true then this block will be executed
    console.log("a is less than b");
} else { //if condition is false then this block will be executed
    console.log("a is equal to b");
}   
//I want to write a program to check which is greatest number among an array of numbers
//if -else if statement is used to check the condition
//if the condition is true then it block will be executed   
//if the condition is false then else block will be executed
//if we have multiple conditions then we can use else if statement
let num = [10, 20, 30, 40, 50]; //array of numbers
//read the array numbers with num[0], num[1], num[2], num[3], num[4]
console.log(num.unshift(100))
let max = num[0]; //initializing the max value with first element of the array
//only use else if statment when we have multiple conditions no for loops 
if(num[0] > num[1]) { //checking  the condition if it is true then if block code will be executed
    //if the conditon is false then else block code will be executed
    // if the condition is true then this block will be executed
    max = num[0]; //if first element is greater than second element then max value will be first element
console.log("max value is:", max); //max value is 100
}   //conditon1 is verifed 
else if(num[1] > num[2]) { //checking  the condition if it is true then else if block code will be executed
    //if the conditon is false then else block code will be executed
    // if the condition is true then this block will be executed
    max = num[1]; //if second element is greater than third element then max value will be second element
}   //conditon2 is verified 
else if(num[2] > num[3]) { //checking  the condition if it is true then else if block code will be executed 
    //if the conditon is false then else block code will be executed
    // if the condition is true then this block will be executed
    max = num[2]; //if third element is greater than fourth element then max value will be third element
}   //conditon3 is verified
else if(num[3] > num[4]) { //checking  the condition if it is true then else if block code will be executed
    //if the conditon is false then else block code will be executed
    // if the condition is true then this block will be executed
    max = num[3]; //if fourth element is greater than fifth element then max value will be fourth element

}   //conditon4 is verified
else  { //if condition is false then this block will be executed
    max = num[4]; //if fifth element is greater than all the elements then max value will be fifth element
console.log("max value is:", max); //max value is 50
}   //conditon5 is verified
//if statmeent is used to check one condition either true or false and only true statemet is exeucted - no flase statment is considered
// if else is used to check both  true and false conditions will execute 
//if is used to execute when conditon is true - else will be execited if conditon is flase
// else if is used to check multiple conditions
//in else if - we do have one if conditons, one else conditons and more else if conditons 
// first we execute if condtion and if it is treu then it will execute the if block code
//if it is false then it will check the else if condition and if it is true then it will execute the else if block code
//if first else if is false then it will check the next else if condition and so on
//if all the conditions are false then it will execute the else block code  
// if no conditon is true then else block code will be executed
//example for nested if 
if(a>b) { //checking  the condition if it is true then if block code will be executed
    console.log("a is greater than b");
    if(a>c) { //checking  the condition if it is true then if block code will be executed
        console.log("a is greater than c");
    } else { //if condition is false then this block will be executed
        console.log("a is less than c");
    }   
    if(b>c) { //checking  the condition if it is true then if block code will be executed
        console.log("b is greater than c");
    }   
    if(c>d) { //checking  the condition if it is true then if block code will be executed
        console.log("c is greater than d");
    }
}

//=================================================================