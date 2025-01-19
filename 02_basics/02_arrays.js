const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros) // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros);
// console.log(marvel_heros.concat(dc_heros)) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// // concat doesn't changes the main array returns a new array
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros)

// we can use "spread" : eg: taking two glasses and dropping them which spreads all of it's contents
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// after spread we get individual elements


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// flattening the elements: Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
// ]


console.log(Array.isArray("Ayush")); // false
console.log(Array.from("Ayush")) // [ 'A', 'y', 'u', 's', 'h' ]

console.log(Array.from({name: "Ayush"})) // [] : couldn't make an array so returned an empty array
// we have to specify weather to make arrays of key or values


 

