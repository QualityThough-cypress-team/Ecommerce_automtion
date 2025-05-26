//================================================================================
//storing the single value 
// 1.Number => for numbers and floating numbers 
// 2.String => for character sequence in ''  or "" => "ram" /'ram'
// 3.Boolean=> true or false  => 
// 4.Undefined => if you do not initialize the value then that variable by default comes under undefined data type 
// 5. null => intentionally making this as null => no value 
// 6.symbol => is used to indeify the value uniquly  =>symbol('phonenumber')
// 7. BigInt => is used to store the data for larger integers
//======================================================================================
//Data type means what type of data we can store in this varaible 
// dynamically typed language 
let x=10 // thi is a number dynamically understand by JS 
let y=10.99 // this is also called  as number data type 
console.log("Data type for floating numbers:",typeof(y))
let name="Ram Prasad" // this is a string dynamically understand by JS 
let company='QualityThought' // single quotes also used to define the string 
// it is a data type - String holding the character sequence 
console.log("x value is :",x)
console.log(typeof(x))
console.log("name value is :",name)
console.log("name is type of :",typeof(name))
let myNull=null
console.log('myNull data type is :',typeof(myNull))
let myVar;
console.log("not initized data type is:",typeof(myVar))

const uniqueID = Symbol('id');
console.log(typeof(uniqueID))
const myAmount=BigInt(1234567890988765443211234556778990988)
console.log(typeof(myAmount))

//Reference data types or non primitive data types  => 
// I would like define a person with some properties 
// Name property , age property , height , weight , qualification , blood group, id 
// properties useful for single person  => define the properoties and assign the value 
// Student  => studnetID, Age, Name  , Qualification 
// To define student , patient , doctor , teacher  => we need reference data 
// Arrays , Objects 
//Array  => store the collection of data of any type 
let fruits =['banana','apple','pineapple','grapes','mangoes','jackfruit']
let fruit="Apple" //single value storage is primitive data type 
let Studnet={ //properties colelction is known as object
"studnetName":"ram",
"Student_Age":30,
"Student_Qualificaiton":"Btech",
"yearof_PAssout":2000,
"State":"Telangana"
}
//define a teacher , doctor, automationtester , tester, employee 
//{key:value} //object // {force:true} //{mulltiple:true}
//[] //array
// function to add  given two numbers
//function nameoftheFunction(argument1,argument2){ return returnvalue}
function add(x,y){ // x=10, y=15 => 10+15 = 25 ;
sum=x+y
    return sum
}

console.log("add function we are using with x=10, y=15,retruns 25 as sum:",add(10,15))

function sub(x, y){
    sum=x-y
    return sum
}
console.log("outcome of sub function:",sub(30,20))
function mul(x,y){
    return x*y
}
console.log("mul value is ",mul(10,0))
console.log("mul value is ",mul(10,10))
console.log("mul value is ",mul(10,1))
console.log("mul value is ",mul(10,5))
let currentDate= new Date()
console.log(currentDate.getDate())
console.log(currentDate.getDay())
console.log(currentDate.getMonth()) //month index starts with 0
console.log(currentDate.getFullYear())
console.log(currentDate.getHours())
console.log(currentDate.getMinutes())
let regex = /hello/i // we can cover this in your automation 
console.log(regex)
let myString="ram prasad"
console.log(myString.length)
console.log(myString.toUpperCase()) //play with string 
console.log(fruits.indexOf('apple'))
console.log(fruits.length)
console.log(fruits[2])//retrival from array
console.log(Studnet.Student_Age)//retrival from object
// string methods 
//array methods
// object properties 
