const objectOne = {}

Object.defineProperty(objectOne, 'property1', {
    value: 42,
    writable:false,
})

objectOne.property1 =77

console.log(objectOne.property1)

//writable:false makes it readonly