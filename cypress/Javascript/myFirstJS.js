console.log("This is my first javascript program")
let x= 5
var y=10
const pi=10; //'const' declarations must be initialized.
// if you want to declare a constant then we can able to use const
//if you declare any varaible as a const then it must be initialized
// we should not redeclare 
//var pi //Cannot redeclare block-scoped variable 'pi'

//what is block scope 
{  const a=10
   

}
let a
var b
{const a=20}
console.log("my x value is :",x)
console.log("my y value is :",y)
console.log("my pi value is :",pi)
console.log("my sum value is :",x+y+pi)