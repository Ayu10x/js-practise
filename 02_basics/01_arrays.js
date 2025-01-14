// arrays

// JavaScript arrays are resizable and can contain a mix of different datatypes.

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr);
// console.log(myArr[1]);

const myHeros = ["IronMan", "SpiderMan", "Deadpool"];
const myArr2 = new Array(0, 1, 2, 3, 4)

// console.log(myArr2);

// console.log(typeof myArr);
// console.log(typeof myArr2);

// myArr2.push(6) // add 6 to myArr2
// myArr2.push(7)
// console.log(myArr2);
// myArr2.pop()
// console.log(myArr2);


// unshift => adds one element to the left side of the array / start of the index.
// shift => the first element out of the array


// When you make copies in Array: array-copy operations
// They will make shallow copies: A shallow copy of an object is a copy whose
// properties share the same references(point to the same underlying values).

// Deep copies: don't share the same reference.

// At console level array can access Prototype functions and also has a length function.



// console.log(myArr.includes(9)) // false
// console.log(myArr.indexOf(9)) // -1 

const newArr = myArr.join()

// console.log(newArr) // 0,1,2,3,4,5
// console.log(myArr) // [ 0, 1, 2, 3, 4, 5 ]

// but join changes the type of arr
// console.log(typeof newArr) // string

// slice, splice

console.log("A ", myArr)

const myn1 = myArr.slice(1,3) // include index 1 and exclude index 3
console.log(myn1) // [ 1, 2 ]
console.log("B ", myArr) // doesn't change the original array: B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3) // include index 1 and index 3
console.log(myn2)
console.log("C ", myArr) // the original array changes with splice and returns the rest of the array