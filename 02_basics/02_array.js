const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]
// in push, array takes anything as an object, even another array
//marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3]);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// //concat combines 2 arrays and gives a new one
// console.log(allHeroes)

// spread is also a way of concating multiple arrays
const all_new_heroes = [...marvel_heroes, ...dc_heroes]

//console.log(all_new_heroes);

//flat removes all the elements from all sub arrays
const another_aaray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_aaray.flat(Infinity)
//console.log(real_another_array);

console.log(Array.isArray("Krisha"))//checks if element in array
console.log(Array.from("Krisha"))//makes a string to array
console.log(Array.from({name: "Krisha"}))// gives empty array as it doesnot know to make of keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//combines into new array
