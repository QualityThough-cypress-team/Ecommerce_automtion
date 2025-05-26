let evenNumbers=[2,4,6,8,10]
console.log("my even numbers:",evenNumbers)
console.log("my first even numbers:",evenNumbers[0]) //at indext zero first value
console.log("My last even number:", evenNumbers.length)
//console.log(evenNumbers.reverse())
console.log("after push we can retrieve the updated length:",evenNumbers.push(12))// outcome is new length  => 6
console.log("after push the updated array is:",evenNumbers)
//push is used to add a new array element at the end of the array 
// array.push() //retruns only updated length not the updated array
console.log("returns the last element ",evenNumbers.pop()) //pop is used to remove the last element from the array
console.log("updated array after pop:",evenNumbers)
console.log("removign the 10 by using pop:",evenNumbers.pop())//10

console.log("updated array after pop:",evenNumbers) //[2,4,6,8]
console.log("adding the 10 by using push:",evenNumbers.push(10))//5
console.log("adding the 10 by using push:",evenNumbers.push(12))//6
console.log("adding the 10 by using push:",evenNumbers.push(14))//7
console.log("adding the 10 by using push:",evenNumbers.push(16))//8
console.log("updated array:",evenNumbers)//[2,4,6,8,10,12,14,16]
let fruits=["Apple","Banana","Mangoes","Guava","Cherries","Grapes"]
console.log(fruits.sort())
console.log(fruits.join(' '))
let x=["this", "is",  "a", "automation", "testing","tool"]
//i want to make these words exist in the array asa string 
console.log(x.join(" "))
console.log(x.join(","))
console.log(x.join("_"))
console.log(x.join("-"))

console.log("Ram prasad".split(""))
console.log("apple".split(""))



