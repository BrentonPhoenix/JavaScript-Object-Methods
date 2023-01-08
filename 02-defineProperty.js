const objectOne = {}

Object.defineProperty(objectOne, 'property1', {
    value: 42,
    writable:false,
})

objectOne.property1 =77

console.log("objectOne" , objectOne.property1)



//writable:false makes it readonly

console.log("objectOne:" , objectOne)
// console.log("objectOne:" , ...objectOne)
console.log(Object.getOwnPropertyNames(objectOne))

//looks like you have to use getOwnPropertyNames on the object if you want to get the property names. I thought that destructuring it might work but it throws an error (TypeError: Found non-callable @@iterator)