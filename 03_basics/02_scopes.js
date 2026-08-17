//var c = 300

//scope is denoted by {}
let a = 300
// below is block scope and anything out is global scope
if (true) {
    let a = 10// block-scoped, restricting its access to the immediate block enclosed by curly braces
    const b = 20
    //console.log("Inner: ", a)
    //var c = 30//function-scoped, meaning it is accessible anywhere within the function it is defined in
}

//console.log(a);
//console.log(b);
//console.log(c);

//nested scope(closure)
//it is like ice cream. a child(function two) can ask for icecream from an adult(function one) 
//but and adult(function one) cant ask for ice cream from a child(function two)
function one(){
    const username = "krisha"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}
//one()

if (true){
    const username = "krisha"
    if (username === "krisha"){
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


//***************************INTERESTING*********************//
// below are two ways of making a function 
//hoisting
console.log(addone(5)) //addone only a function
function addone(num){
    return num + 1 
}

addTwo(5)
const addTwo = function(num){ //here addTwo is a function but also a variable 
    return num + 2
}

