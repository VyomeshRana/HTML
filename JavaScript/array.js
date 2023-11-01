// array are
// mutable
// duplicate
// hetro
// support indexing

let arr = ["one" , 2 ,"three", 4, true, 29.31]
console.log(`Array value ==> ${arr}`)
console.log(typeof(arr))


let bangaluru = ["basavanguddi",'Shrinagar','Majestic', 'Kalasipalya', 'Kengeri']
// indexing
console.log(bangaluru[[0]])
console.log(bangaluru[[5]])  // undefinded
console.log("length of bangaluru ==>", bangaluru.length)  //5


// adding new value using index
bangaluru[5] = "shivajinagar"
console.log("Update array ==> ",bangaluru)

// loop to fetch value

for (i in bangaluru){
    console.log(bangaluru[i])
}

// ARRAY BUILT-IN METHOD
// 1. toString() --> convert array into string of comma separated
console.log('\n. coverted to string -->',bangaluru.toString())

// 2. join() --> joins array values based on specifies separator
console.log('\n. joining array -->',bangaluru.join("-"))

// 3.length  

// 4.pop() - Remove element for last index value {and return that element}
console.log('\n. pop element -->',bangaluru.pop())

// 5.push() - adds element at last position of array {returns length of new array}
console.log('\n. push returns -->',bangaluru.push("end"))
console.log('\n. push result -->',bangaluru)


// 6.shift() --> removes element from begining of array {returns removed element}
console.log('\n. shift -->',bangaluru.shift())

// 7.unshift() --> add elements at begining of array and returns length of updated array
console.log('\n. unshift returns -->',bangaluru.unshift("start"))
console.log('\n. unshift result -->',bangaluru)

// 8.concat() --> combines the multiple array and forms a new array
console.log('\n. concat result -->',bangaluru.concat(arr))

// 9.delete --> delete selected value from array (space, memory will be reserved, but no value )
console.log('\n. delete returns -->',delete bangaluru[5])
console.log('\n. delete result -->',bangaluru)

// 10.slice() --> creates a piece of existing array based on giving index range.
console.log('\n. slice result -->',bangaluru.slice(1,4))

// 11.splice() --> return a array containing remove elements
let newArr = ['hellow', 'hi', 'tata', 'bye', 'bye']
console.log('\n. splice result -->',newArr.splice(1,2,"good boy",'saaku','love'))
console.log('\n. add new using splice result -->',newArr)

// 12.sort() -->
console.log('\n. sort result -->',newArr.sort())

// 13.reverse()-
console.log('\n. reverse result -->',newArr.reverse())

// 14.

// 15.

// 16.

console.log("\n\n\n")


let nestedArr = [1,2,[3.1,3.2,[3.3,3.4]],4,[5.1,5.1],6]
console.log(nestedArr[2][2][1])

for(i in nestedArr){
    console.log(nestedArr[[i]])
}
