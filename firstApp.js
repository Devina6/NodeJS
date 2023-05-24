//command promt to run js file
//node firstApp.js

//console.log
console.log("Hello World");

//to create a file from js 
const fs = require ('fs')
fs.writeFileSync('hello.txt','Hello World');

// arrow function to multiply
const multiply = (a,b)=> a*b;
console.log(multiply(2,4));
