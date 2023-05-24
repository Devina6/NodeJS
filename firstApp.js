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

//destructering object
const student = {
    name:'Devina',
    class:'Back-end',
    subject:'NodeJS',
    details(){
        console.log('Hi, I am '+ this.name+' in class '+this.class+' studying '+this.subject)
    }
}
const {name,subject} = student;
console.log(name,subject)

//destructering array
const array = ['apple', 'oranges' , 'mango', 'lemon']
const [arr1,arr2] = array
console.log(arr1,arr2)

//async
console.log('a');
console.log('b');
setTimeout(() => console.log('c'), 3000)
setTimeout(() => console.log('d'), 0)
console.log('e');// output: a b e d c

//using only promises(callback)
console.log('a');
console.log('b');
const timer1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('c')
  },3000)
})
timer1.then((t1)=>{
  console.log(t1)
  const timer2 = new Promise((resolve ,reject)=>{
    setTimeout(()=>{
      resolve('d')
    },0)
  })
  timer2.then((t2)=>{
    console.log(t2)
    console.log('e')
  })
})//output:a b c d e

//using promises and async/await
console.log('a');
console.log('b');
const timer = async()=>{
  const timer1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('c')
    },3000)
  })
  const timer2 = new Promise((resolve ,reject)=>{
    setTimeout(()=>{
      resolve('d')
    },0)
  })
  let [t1,t2] = await Promise.all([timer1,timer2])
  console.log(t1)
  console.log(t2)
  return ('e')
}
timer().then((e)=>console.log(e))//output:a b c d e
