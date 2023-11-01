// String built-in methods
//  1.length

let str = 'Pyspider basavanagudi'
console.log('length of string ==>', str.length)

//  2.toUpperCase()  -- converts all alphabets into uppercase
console.log("\n",str.toUpperCase()) 

//  3.toLowerCase() --converts all alphabets into lowercase
console.log("\n",str.toLowerCase()) 

// 4.slice() -- start and end value and return new str between start and end
console.log("\n",str.slice(2,8)) 

// 5.replace() -- replace a existing str with given str if its matches
console.log("\n",str.replace("Py","Q")) 

// 6.concat() -- add new multiple str to existing str and returns updated
let city = " bangalore "
console.log("\n",str.concat(" is"," located", " in "))
console.log("\n",str + city)

// 7.trim() -- remove blank space from start and end
console.log("\n",city.trim())

// 8.trimStart() -- remove blank space from start
console.log("\n",city.trimStart())

// 9.trimEnd()  -- remove blank space from end
console.log("\n",city.trimEnd())

// 10.split()  -- 
console.log("\n",str.split(" "))

// 11.padStarts() -- pads the given str from start with existing str based on length give 
console.log("\n",str.padStart(28," | "))

// 12.padEnd() -- pads the given str from end with existing str based on length give
console.log("\n",str.padEnd(28," | "))

// 13. charAt() -- it returns the character present at given index
console.log(str[10])
console.log("\n",str.charAt([10]))

// 14. charCodeAt() -it returns the ASCII value of char present at the given index
console.log("\n",str.charCodeAt(10))

// 15.indexOf() --returns the index of 1st occurrence of the char given (if more than one char giver than it returns -1 )
console.log("\n",str.indexOf("a"))

// ex

// let prompt = require('prompt-sync')({sigint:true})
// let str1 = prompt("enter string :")
// let chr1 = prompt("enter charter :")

// console.log("the index of the Charter is",str1.indexOf(chr1))
// console.log("the ASCII value of the Charter",str1.charCodeAt(chr1))
// console.log(`index number of ${chr1} : ${str1.indexOf(chr1)} and ASCII value is ${str1.charCodeAt(str1.indexOf(chr1))}` )
// console.log("the String is ==>",str1)

// end


// 16.lastIndexOf() --
console.log("\n",str.lastIndexOf('p',2))

// 17. include() --
console.log("\n",str.includes("Py"))
console.log("\n",str.includes("Pyspider"))
console.log("\n",str.includes("Pyser"))

// 18. startsWith() --
console.log("\n",str.startsWith("P"))
console.log("\n",str.startsWith("p"))

// 19.endsWith()  --
console.log("\n",str.endsWith("i"))
console.log("\n",str.endsWith("I"))










