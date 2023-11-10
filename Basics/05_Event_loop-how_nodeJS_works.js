// Event Loop

// call stack
// Node API
// Callback Queue

// API => application programming interface, basically interaction between two programming interface
// in Node API there will be those function whose are inheriten from other language. setTimeout is an example of node API

const x =1;
const y = 2;
console.log(x+y);

// executing a code main functions(global function) will be registered in call stack before execution. then log function will be registered

// lets see another example
console.log("starting up");

setTimeout(()=>{
    console.log("Resolved in 2 sec")
},2000);

setTimeout(()=>{
    console.log("Resolved in 0 sec")
},2000);

console.log("finishing up");

// Call stack =>  at first main function will be registered in call stack => starting => finishing up then they wil go out first
// next is setTimeout(2) will be send to Node API
// setTimeout(0) will be send to Node API as well 

// starting up & finishing up =>they wil go out first
// and  then main function executed

// then lowest time consumuing function will be send to callback queue  to call stack and executed
// then another will come with the same process
