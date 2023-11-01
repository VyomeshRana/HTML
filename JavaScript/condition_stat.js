let prompt = require("prompt-sync")({sigint:true})
// if else

// let age = prompt("enter age : ") 

// if(age > 0){
//     console.log("you are alive")
// }
// else{
//     console.log("die die die")
// }


// else if 

// let lol = prompt("enter no : ")

// if (lol < 10){
//     console.log("good boy")
// }
// else if(lol > 10){
//     console.log("good girl")
// }
// else{
//     console.log("all good")
// }

// like match case ==> switch
let state = parseInt(prompt("enter the number :"))
switch(state){
    case 1:
        console.log("watch this")
        break
    case 2:
        console.log("here comes the party")
        break
    default:
        console.log("darkness")
        break
}