// if statement 
// if (condition){   <=syntax
// }

// if (true){
//     //if condition is true then it will be executed
// }

// if (false){
//     //if condition is false, then it will not be executed
// }

// <,>,<=,>=, ==(checks if equal), !=(not equal), ===(checks for datatypes as well), !==(checks neg)

// const isUserloggedin = true 
// const temperature = 41

// if (temperature < 50){
//     console.log("less than 50");
// }else{
//     console.log("temeperature is greater than 50");
// }
// console.log("execute")

// const score = 200
// if (score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);



// IF ELSE (MULTIPLE)
// const balance = 1000
// //if (balance > 500) console.log("test"),console.log("test2"); DO NOT DO 

// if (balance < 500){
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// }else if (balance < 950){
//     console.log("less than 950")
// }else{
//     console.log("less than 1200");
// }


const userLoggedIn = true 
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy Courses");
}

if (loggedInFromGoogle || loggedInFromEail){
    console.log("User logged in");
}