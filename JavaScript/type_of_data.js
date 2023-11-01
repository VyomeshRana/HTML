// data type
// 1. string
// 2. number
// 3. bool
// 4. bigint
// 5. undefined
// 6. null
// 7. object

let c = 'hi'
console.log("value of c",c)

let a = "no"
console.log("value of c",a)

// let e = '''lol'''
// console.log("value of c",e)  ==> error

let uname = `tony`
console.log("value of c",uname)

console.log(`user nmae is ${uname}`)

// type of data use typeof

console.log(`type of ${uname} is ${typeof uname}`)


// NuMBER

let num = 123
console.log(`num is ==> ${num}`, `${typeof num}`)

const decNum = 123.130
console.log("decimal no ==>", decNum, `${typeof decNum}`)

// max cap of number is 16

let num_cap = 1234567890123456
console.log(`num ==> ${num_cap} type is ${typeof num_cap} `)

// BIGint

let BIGint = BigInt('12345678901234567890')
console.log(`${BIGint}`, `type is ${BIGint}`)

let Bint = 12312312312312313123123n
console.log(`${Bint}`, `type is ${typeof Bint}`)


// Boolean

let e = 100
let f = 200


console.log("\n boolean", e == f)
console.log("\n boolean", e != f, `\n${typeof (e == f)}`)

// Undefined variable

let j

console.log(j, `${typeof j}`)

// null

let age = null
console.log(age , typeof age)

// Object

// creating object
let car = {
    brand : 'Tata',
    name : 'Nexon',
    model : 2023,
    color : 'Dark',
    version : 3.0,
    isAffordable : true,
    seatCapacity : 5,
    fuel_type : 'Petrol/Diesel'
}


// fetching values 
console.log(car)
console.log("Car Brand is ==>",car['brand'])
console.log("car name is ==>",car.name)
console.log("car color is ==>",car.color)
console.log("car fuel type is ==>",car.fuel_type)
console.log("car is affordable ==>",car.isAffordable)
console.log("car seat capacity is ==>",car.seatCapacity)
console.log("car model is ==>",car.model)

// updating object

car["color"] = "Dark Blue"

console.log(`Updated object`,car)

// Adding new name & value

car["Top_Speed"] = '220 km/h'

console.log("\nafter adding new value ==>", car)

// deleting value

delete car["version"]  // or delete car.version
console.log("\nafter deleting new value ==>", car)

console.log(delete car["version"])




const car_2 = {
    brand : 'Tata',
    name : 'Nexon',
    model : 2023,
    color : 'Dark',
    version : 3.0,
    isAffordable : true,
    seatCapacity : 5,
    fuel_type : 'Petrol/Diesel'
}

car_2.color = "red"

console.log(car_2)

// even in const we can change value

// now freezing object

Object.freeze(car_2)

// after freeze we cant change value
console.log("CAR")

// Copy

let Copy ={...car}
console.log("Original ==>" ,car)
console.log("copy ==>",Copy)


let carV2 = {
    safety : '*******',
    engine : "1.2cc Turbo"
}

let updatedCar = {...car,...carV2}
console.log("\n updated car ==> ", updatedCar)

// Fetching keys and values

console.log("Keys ==>",Object.keys(updatedCar))
console.log("values ==>",Object.values(updatedCar))

// printing object into table

console.table(updatedCar)
