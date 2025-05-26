console.log(a); // undefined (hoisted) - declaration only hoisted 
// initilization can not be hoisted // declared the variable tha t is the reaosn we do printed undefined 
//var is not a blocked scope varaible 
// var re declare 
// var re asisgnabe 
var a = 10;
console.log(a); // 10

if (false) { // conditonal statement for true conditon it will execute
    var x = 20; // see here the var x=20   statement is greyed out 
  }
  var a =25;
  console.log(a)
  console.log(x); // 20 (x is accessible outside the block)
  
