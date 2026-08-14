//PRIMITIVE (call by value)
//7 types: String, Number, Boolean, Null, Undefined, Symbol(to make any value unique), BigInt(to represent large integers)

// const score = 100;
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log (id == anotherId);

// const bigNumber = 123654789987456321n //becomes BigInt number
    
//NON PRIMITIVE (reference types)
//Array, Objects, Functions (typeof will be object)

// array 
// const heroes = ["shaktiman", "naagraj", "doga"];

// //object
// let myObj = {
//     name: "krisha",
//     age: 22,
// }

// //Function
// const myFunction =function(){
//     console.log("hello world");
// }

// console.log(typeof bigNumber);

//Is JS dynamically typed or statically typed language? 
// //Yes, because we don't have to specify the datatype of a variable while declaring it. 
// JS automatically determines the datatype based on the value assigned to it.
//(typescript is statically typed language because we have to specify the datatype of a variable while declaring it.)


// PRIMITIVE DATA TYPES
const name = "krisha"; 
console.log(typeof name);//string

const age = 22;
console.log(typeof age);//number

const isLoggedIn = true;
console.log(typeof isLoggedIn);//boolean

const myVariable = null;
console.log (typeof myVariable);//object

const myName = undefined;
console.log (typeof myName);//undefined

const id = Symbol('123')
console.log(typeof id);//symbol

const bigNumber = 123654789987456321n
console.log(typeof bigNumber);//bigint

// NON PRIMITIVE DATA TYPES
const heroes = ["shaktiman", "naagraj", "doga"];
console.log(typeof heroes);//object

let myObj = {
     name: "krisha",
     age: 22,
    }
console.log(typeof myObj);//object

const myFunction =function()
{
    console.log("hello world");
}   
console.log(typeof myFunction);//function