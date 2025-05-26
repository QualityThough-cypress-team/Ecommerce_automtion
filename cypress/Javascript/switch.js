// This code demonstrates the use of a switch statement to 
// select a fruit from an array based on its index.
// The switch statement evaluates the fruitIndex variable 
// and executes the corresponding case block.
//instead of using multiple if-else statements,
// we can use switch statement - 
// switch statement is used to check the condition
// which case matched with the condition =>matched case block will be executed

// Declare the fruits array
// and initialize it with some fruit names
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

const fruitIndex = 1; // Change this index to select a different fruit
console.log('Selected fruit index: ', fruits[fruitIndex]);
// The switch statement is used to select one of many code blocks to be executed.

//Syntax of switch statement
/*
switch(condition){
case value1: //case is used to check the condition 
//value is nothing but conditon outcome should match with the value of any case 
//case value 2 is matched with the given conditon then case value 3 code block will be execute 

    // code to be executed if condition matches value1
    break; //break statement is used to exit the switch block
case value2:
    // code to be executed if condition matches value2
    break; //break statement is used to exit the switch block
    case value3:
    // code to be executed if condition matches value3
    default:
    // code to be executed if condition doesn't match any case
}

*/
switch (fruitIndex) {
    case 0: // this case will be execute only when fruitIndex is 0
        console.log('Selected fruit: ' + fruits[0]);
        break; // ends the switch statement 

    case 1: // this case will be execute only when fruitIndex is 1
        console.log('Selected fruit: ' + fruits[1]);
        break;
    case 2:// this case will be execute only when fruitIndex is 2
        console.log('Selected fruit: ' + fruits[2]);
        break;
    case 3://this case will be execute only when fruitIndex is 3
        console.log('Selected fruit: ' + fruits[3]);
        break;
    case 4: // this case will be execute only when fruitIndex is 4
        console.log('Selected fruit: ' + fruits[4]);
        break;
    default: // this default case will be executed only when the conditon does not match with any case value 
    
        console.log('Invalid index. Please select a valid fruit index.');
}
//switch(){} 
//case value1: //case is used to check the condition
//case value2: case is used to check the conditon with value 2
//break is used to stop the switch statement execution 

//switch statement example with color selection 

let myColor= "green" //string value
//switch statement is used to check the condition 

switch(myColor){
    case "red": //case is used to check the condition 
        console.log("my color is red")
       // break; //break statement is used to exit the switch block
    case "blue": //case is used to check the condition 
        console.log("my color is blue")
        //break; //break statement is used to exit the switch block
    case "green": //case is used to check the condition 
        console.log("my color is green")
        //break; //break statement is used to exit the switch block
    default: //default case will be executed only when 
    // the conditon does not match with any case value 
        console.log("my color is not red, blue or green")
}
//switch statement is used to check the condition
//case is used to check the condition and if matches 
// execute the code block
//when case matches with the condition then that case block will be executed
//if the case does not match with any case then default block will be executed
//break will terminate the switch statement execution -
//  if there is no break statement then all the case
//  blocks will be executed from the case where it matches 

/*

When to Use:

Use if or if-else for simple conditions or ranges.
Use if-else if for multiple conditions with complex logic.
Use switch for comparing a single variable against many discrete values.
*/
