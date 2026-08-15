const score = 400
const balance = new Number(100)
// console.log(score);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));//decimal points added. here since 2, 2 decimal points

// const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3));

// const hundred = 1000000
// console.log(hundred.toLocaleString("en-In"));

// *********************************************MATHS**********************
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.abs(-4));
// console.log(Math.ceil(4.9));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,8,1,7,22,6));
// console.log(Math.max (4,3,8,1,7,22,6));
console.log(Math.random());//always between 0 and 1
console.log(Math.random()*10);//decimal point shifts
console.log(Math.floor(Math.random()*10+1));//if 0.04 then 0, therefor to avoid this

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min) //formula