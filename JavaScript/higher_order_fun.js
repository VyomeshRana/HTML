// Map()

let num =[1, 2, 3, 4, 5, 6, 7, 8, 9]

let res = num.map((item)=>{
    // console.log(item*item)
})

let res2 = num.map((item)=>{return (item*item)*item})
console.log("cube of array ==>",res2)

// filter()

let res3 = num.filter((item)=>{
    return item%2==0
})
console.log("using filter() ==>",res3)

// filter() --> alternate method

let odd = num.filter(findOdd)

function findOdd(element){
    return element %2 == 1
}

console.log("Odd number array ==> ", odd)

// reduce()

let res4 = num.reduce((curr, acc)=>{
    return curr+acc
})
console.log("using reduce() ==> ",res4)



// ex
let prompt = require('prompt-sync')({sigint:true})
let n =5
let arr=[]

for(i = 0 ; i <= 4 ;i++)
{
    let num = parseInt(prompt("enter 1st number :"))
        arr[i] =num

}
console.log("array is ===>",arr)

let arr1 =  arr.map((item)=>{
    return item*7
})
console.log("array product ==>",arr1)

let arr2 = arr.filter((item)=>{
    return item %2 == 0
})
console.log("returns even ==>",arr2)



let arr3 = arr.filter((item)=>{
    return item %2 == 1
})
console.log("returns odd ==>",arr3)