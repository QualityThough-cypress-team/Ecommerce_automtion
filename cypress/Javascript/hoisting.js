
//var y will be moved to the top but var y=10 can not move to the top
//var y  declaration
// var y=10 // initilize // this initilizing is not moved to top => hoisting 

var x = 5; // Initialize x
//before initilizing the y 

console.log(x + " " + y);  // y is not initilized  
{
var y = 7; // Initialize y
//after initilization
console.log(x + " " + y);   
}
console.log(y)
