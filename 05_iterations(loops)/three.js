//array specific loops
//for of loop

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello woorld!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)    
// }

// MAPS (key-value pairs. all unique values)
const map = new Map()
map.set("IN", "India")
map.set("USA", "United State of America")
map.set("Fr", "France")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
}


// for of on object
// const myObj = {
//     "game1": "NFS",
//     "game2": "Spiderman"
// }
// for (const [key, value] of myObj) {
//     console.log(key, ":-", value);
// }