let score = "33abc" //NaN because abc; null becomes 0; undefined becomes NaN; boolean true becomes 1 and false becomes 0; boolean gets 1/0, string becomes NaN
//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score) //explicit conversion
//console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

//1 => true; 0 => false
//"" => false
// "krisha " => true

let someNumber = 33
let stringNumber = String (someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

//*******************OPERATIONS******************//
let value = 3
let negValue= -value
//console.log(negValue); //-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " Krisha"
let str3 = str1 + str2
//console.log(str3);

// console.log(+true);// conversion into 1 
// console.log(+""); //conversion into 0

let gameCounter = 100
// both same, increment by 1//
gameCounter++;// uses current value then adds 1 to gameCounter
++gameCounter; // adds 1 to gameCounter then uses new value
//console.log(gameCounter);


