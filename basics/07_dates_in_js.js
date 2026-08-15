let myDate = new Date ()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

// console.log(typeof myDate);//object

let myCreatedDate = new Date (2026, 0, 26)// year, month(starting from 0), day
// let myCreatedDate = new Date (2026, 0, 26, 5, 3)//... hour and minute
// let myCreatedDate = new Date ("08-15-2026")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

// `${newDate.getDay()} and the time`

newDate.toLocaleString("deafualt",{
    weekday: "long", //ctrl+space for options
})

