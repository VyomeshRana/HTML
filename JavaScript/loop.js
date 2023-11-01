// for loop

let prompt = require("prompt-sync")({sigint:true})

let no = parseInt(prompt("enter the number :"))

let res = ''
let rr= ''
for(i=1;i<=no;i++){
    if(i % 2 ==1){
        // console.log(`odd no ${ res += i +' '}`)
        res += i + ' '

    }
    else{
        rr += ` ${i}`
    }
}

console.log(`odd no  from 1 to ${no} ${res}`)
console.log(`even no from 1 to ${no} ${rr}`)




