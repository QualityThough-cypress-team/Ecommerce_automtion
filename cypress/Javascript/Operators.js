//arithematic operators -  
let x = 10; //declare the variable and assign the value =
let y = 3; //declare the variable with let and assign the value 

console.log("sum of x and y :",x + y); // 13 //console.log() is used to print the outcome in the console 
console.log("subtraction value of x-y :",x - y); // 7
console.log("multiplication of x*y :",x * y); // 30
console.log("division X,y :",x / y); // 3.3333333333333335
console.log("modulus of x,y :",x % y); // 1
console.log("before increment x value is :",x++); // x becomes 11
console.log("after increment x value is ",x); // 11
console.log("before decrement x value is :",x--);//10 becomes 10
console.log("after decrement x values is:",x); // 10
//Assignment operators  => arithmetic operator with =  
let a = 10;
console.log(a)
a += 5;  // a= a+5 a becomes 15
console.log(a)
a -= 3;  // a= a-3 a becomes 12
console.log(a)

a *= 2;  // a=a*2  a becomes 24
console.log(a)

a /= 6;  // a= a/6 a becomes 4
console.log(a)


a %= 3;  // a=a%3  a becomes 1
console.log(a)

//comparision operator => compare two value  => both are same retrun true 
// if not retrun false  => boolean  => data type 
// = this is used to assign the value => assignment operator 
// == is used to compare the values => comparison operator 
// ===  is usedto compare the value and type of the value  
// !=  is opp to ==
// !==  is opp to ===  => strict not equal 

console.log("5 and '5' retrun true when loose equality :",5 == '5');  // true (loose equality)
console.log("5 and '5 retrun false when strict equality:'",5 === '5'); // false (strict equality)
console.log("not equal 5 is not same as 3 hence it is true",5 != 3);    // true
console.log("5 is greater than 3 hence it is true ",5 > 3);     // true
console.log("5 is not less than 3 hence it is false ",5 < 3);     // false
console.log("5 is equal to 5 ",5 <= 5);    // true
console.log(" ", y<=x)

// Logical operators :  combine one more conditions 
let c1 = true;
let c2 = false;
//c1&& c2 => false 
//c1||c2 => True
//&& Logical And only true when both conditons are true 

console.log( "Logical and - c1 is true and c2 is false result for c1&&c2 :",c2 && c1); // false (both must be true)
//&& results true only when the conditon1 and conditon2 both are true 
// in other situations outcome is false 
// conditon1 true but conditon 2 is false then  out come false 
// conditon1 true but conditon2 is true then outcome true 
// conndition1 false but conditon2 is true then outcome false 
// conditon1 false but conditon 2 is flase then outcome false 

//Logical OR => any one conditon is true then Logical or retruns true 
// Conditon1 true condtion 2 true  => true 
// condtion1 true condtion2 false => true 
// condtion1 false conditon2 true  => true 
// conditon1 false  conditon2 false  => false 

console.log("Logical OR -  c1 true c2 false c1||C2  retrun:",c1 || c2); // true (at least one must be true)
console.log(!c1);     // false (negates the value)

//conditonal operator (ternary operator )
//syntax  : condition ? expr1 : expr2
// if the conditon is true => consider /execute expression1 
// if condtion is false => execute experession2 

// == /===/> >= < <= etc...
// a||b , a&&c , !a
x=99
x>100 ? console.log("x is greaterthan 100",x) :console.log("x is smaller than 100",x)

//Type Operators:  works on type of the data 

console.log("'5' is a :",typeof('5')) //string
console.log("5 is a:", typeof(5)) //number 
console.log("" , typeof(m))
let fruits ={seasonalFruit:"apple",
    RegularFruit:"banana"}
    let even= [2,4,6,8]
let cars =["tata","hundai", "honda"]
console.log("fruits is type of :" ,typeof(fruits))
console.log("cars is type of:",typeof(cars))
console.log(typeof(even))