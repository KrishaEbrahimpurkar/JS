//singleton (only one type of object when made with constructor)
//when made as a literal, singleton will not be made

//object litrals
//Object.create (nade with constructor)

const mySym = Symbol("key1")

const JsUser = {
    name: "Krisha",
    "full name": "Krisha Ebrahimpurkar",
    [mySym]: "mykey1",
    age: 22,
    location: "mumbai",
    email: "krisha@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}
// how to access objects
// console.log(JsUser.email)// this is how it is generally done but mostly not preffered because a key is taken as a string so we cannot use it without the "."
// console.log(JsUser["email"])// prefred way because if a key is written in "", it can be easily accessed
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

//how to change objects
JsUser.email = "Krisha@chatgpt.com"
//Object.freeze(JsUser)//values do not change further
JsUser.email = "Krisha@microsoft.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetingTwo());

