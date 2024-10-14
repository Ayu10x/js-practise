const name = "ayush"

const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// `` => use backticks which helps in string interpolation


const gameName = new String('Ayu10x')

// console.log(gameName);
// console.log(gameName.charAt(0));
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName);
// here original value is not changed
// as it's a primitive type 

const newString = gameName.substring(0,3)
// console.log(newString);

const anotherString = gameName.slice(0,-3)

// console.log(anotherString);


const newString1 = "     thereAreSpaces"
console.log(newString1);
console.log(newString1.trim());

const newStr = "Ayu-10x"

console.log(newStr.split('-'));
