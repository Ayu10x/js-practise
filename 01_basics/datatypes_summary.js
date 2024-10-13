// Primitive

// 7  types : String, Number, Boolean, null, undefined, Symbol, BigInt

/*
JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime
*/

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null

let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

// const bigNumber = 3965912776548279n;



// Reference (Non Primitive)

// Arrays, Objects, Functions
// All the typeof the reference types are object.

const heros = ["shaktiman", "naagraj", "doga"]

let obj=
{
    name: "ayush",
    age: 18,
}

const myfunc = function(){
    console.log("hello World!!");
}

console.log(typeof myfunc);
console.log(typeof id)