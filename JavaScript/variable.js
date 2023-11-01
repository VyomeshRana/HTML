// a = 10
// console.log(a)

// 1. can contain alphabets, numbers, specials char like "_" , "$"
// 2. must start with only alpha or special char
// 3. space is not allowed
// 4. JS reserved keywords cant be used as variable name like var, let, if , else, pass, name etc
// 5.variables are case sensitive

// var variable

// var a = 200

// {
//     console.log("inside block ",a)
    
// }
// console.log("outside block",a)


// console.log("value a before re-init",a)

// a = 300 // re -initializations

// console.log("value a after re-init",a)

// re-decl
// var a = 500
// console.log("value a after re-dec",a)



let x = 20

console.log("value a after decl",x)

x = 30
console.log("value a after re-init outside box",x)

// re-initialization
{
    let x = 150
    console.log("value a after re-init",x)
    
    x = 50
    console.log("value a after re-init inside block",x)
}

console.log("value a after re-init inside block",x)

// let cant be  re-declared

// let x = 500
// console.log("value a after re-dec ",x) output ==> SyntaxError: Identifier 'x' has already been declared

const c = "hi"
console.log("value of c",c)

// c = "not hi"
// console.log("value of c",c)  ==>TypeError: Assignment to constant variable.

// const c = "new" ==> SyntaxError: Identifier 'c' has already been declared


const pi =  3.142
let r = 10
let area = pi * r * r
console.log("area of circle is",area)




