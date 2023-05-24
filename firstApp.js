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

//create object
const student = {
    name:'Devina',
    class:'Back-end',
    subject:'NodeJS',
    details(){
        console.log('Hi, I am '+ this.name+' in class '+this.class+' studying '+this.subject)
    }
}
student.details()

//array.map
const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']
console.log(array)
console.log(array.map(item => {
    if (item===' '){
        return 'empty string'
    }else{
        return item
    }
}))

//spread operator
const copiedArray = [...array]
console.log(copiedArray)

const copiedObject = {...student}
console.log(copiedObject)

//rest operator
const toArray = (...args) =>{
    return args
}
console.log(toArray(1,2,3,4))
