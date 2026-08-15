// function sayMyName(){
//     console.log("K");
//     console.log("R");
//     console.log("I");
//     console.log("S");
//     console.log("H");
//     console.log("A");
// }

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3,5)
// console.log("Result", result) //if we do this, our result will be declared as undefined

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)

//console.log("Result", result);

function loginUserMessage(username){
    if(username === undefined)//(!username)
    {
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`
}

// console.log(loginUserMessage("Krisha"))
//console.log(loginUserMessage())// when values not passed, result is given as undefined

function calculateCartPrice(...num1){//... is spread/rest on its use case
    return num1
}

//console.log(calculateCartPrice(200,400,500))

const user = {
    username: "krisha",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)
handleObject({
    username:"sam",
    price: 399
})

const myNewArray = [200,400,100,60]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,100,60]))