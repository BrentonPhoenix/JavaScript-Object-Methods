let objectOne = {
    a: "string",
    b: 54,
    c: null
}

// console.log(Object.entries(...objectOne))
console.log(Object.entries(objectOne))

//gives an array of key value pairs
let arrayOfObjectOne = Object.entries(objectOne)

console.log("arrayOfObjectOne", arrayOfObjectOne)
console.log("arrayOfObjectOne + spread operator", ...arrayOfObjectOne)
console.log("arrayOfObjectOne + spread operator at position 0", ...arrayOfObjectOne[0])
console.log("arrayOfObjectOne + spread operator at position 1", ...arrayOfObjectOne[1])
console.log("arrayOfObjectOne + spread operator at position 2", ...arrayOfObjectOne[2])

//tests are neat but probably mostly useless, unless the data type was more complex maybe?

let objectTwo ={
    keyOne: {
        keyOnePointOne: 22,
        keyOnePointTwo: 44,
        keyOnePointThree: 88
    },
    keyTwo: 2,
    keyThree: 3
}

let arrayOfObjectTwo = Object.entries(objectTwo)

console.log("arrayOfObjectTwo", arrayOfObjectTwo)
console.log("arrayOfObjectTwo + spread operator", ...arrayOfObjectTwo)
console.log("arrayOfObjectTwo + spread operator at position 0", ...arrayOfObjectTwo[0])
console.log("arrayOfObjectTwo + spread operator at position 1", ...arrayOfObjectTwo[1])
console.log("arrayOfObjectTwo + spread operator at position 2", ...arrayOfObjectTwo[2])

//might be useful for more complex objects.