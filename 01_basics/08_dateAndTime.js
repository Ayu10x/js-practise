// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0 , 23)
// console.log(myCreateDate);
// console.log(myCreateDate.toString());

// let myCreateDate = new Date("2023-01-14")
// console.log(myCreateDate.toString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date()
// console.log(newDate);

newDate.toLocaleString('default',{
    weekday: "long"
})
