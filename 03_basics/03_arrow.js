const user = {
    username: "krisha",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);//"this"->refers to current context. here, just using "username will work since it is in the same scope but usually "this" is used
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "sam" // will use sam because context changes
// user.welcomeMessage()

//console.log(this);//empty object shown as global scope has no value
//the gloabal object in browser is window object

// function chai(){
//     let username = "krisha"
//     console.log(this.username);//undefined becuase it is working in object but not in function
// }
// chai()

// const chai = function(){
//     let username = "krisha"
//     console.log(this.username);//undefined
// }
// chai()


//arrow function (this is not working in arrow function)
// const chai = () => {
//     let username = "krisha"
//     console.log(this);//empty {}
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2// explicit return
// }
//when parenthesis is used, return NEEDS to be used
//without parenthesis {}, only need ()
//const addTwo = (num1, num2) => num1 + num2 //implicit return
// const addTwo = (num1, num2) => (num1 + num2)

//returning an object
const addTwo = (num1, num2) => ({username: "krisha"})

console.log(addTwo(3,4))


const myArray= [2,5,7,9]
myArray.forEach()