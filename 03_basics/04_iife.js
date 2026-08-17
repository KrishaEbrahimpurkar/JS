//Immediately Invoked Function Expression (IIFE)

//named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
    
})();//add semi colon for interpreter to understand end
//to avoid global scope variables, IIFE is used.
//in IIFE the function is wrapped in paranthesis and called with parenthisis in the end without declaring return 


//unnamed IIFE
((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("krisha")