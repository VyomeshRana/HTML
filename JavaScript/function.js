// // types of function
// // 1.name function
// // 2. anonymous function
// // 3. arrow function
// // 4. IIFE function
// // 5. higher ordered func
// // 6. built-in-func
// let prompt = require('prompt-sync')({sigint:true})


// //1. name function
// greet()  // Hoisted-> decrable are moved to top 


// function greet(){
//     console.log("good afternoon ladies and ladies")
// }


// //2. anonymous

// let add1 = function(a,b=0){
//     console.log(a+b)
// }
// add1(5,15)

// //3. arrow function

// let math = (a,b)=>{
//     return a+b
// }
// let res = math(10,30)
// console.log(res)


// // eg for taking user input
// let add_two = (n,e) =>{
//     console.log(n+e)
// }
// let n = parseInt(prompt("enter 1st number :"))
// let e = parseInt(prompt("enter 1st number :"))
// add_two(n,e)


// // function inside another function (name function inside arrow )
// let m = (a,b)=>{
//     function add(a,b){
//         console.log(a+b)
//     }
//     add(a,b)
//     function sub(a,b){
//         console.log(a-b)
//     }
//     sub(a,b)
//     function div(a,b){
//         console.log(a/b)
//     }
//     div(a,b)
//     function mul(a,b){
//         console.log(a*b)
//     }mul(a,b)

// }
// let a = parseInt(prompt("enter a value :"))
// let b = parseInt(prompt("enter b value :"))

// m(a,b)



// // every function is arrow func

// let m1=(k,l)=>{
//     add1 = ()=>{
//         console.log(k+l)
//     }
//     add1()
//     sub = ()=>{
//         console.log(k-l)
//     }
//     sub()
// }
// m1(parseInt(prompt("enter k = ")), parseInt(prompt("enter l = ")))




//4. IIFE - immediately invoked func expression

(function(){
    console.log("this is IIFE")
})()
