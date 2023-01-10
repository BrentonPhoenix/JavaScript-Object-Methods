const objectOne = {}

Object.defineProperties(objectOne, {
    property1: {
        value: 42,
        writable: false
    },
    property2: {
        value: 88,
        writable: true
    }
})
objectOne.property1 = 0
objectOne.property2 = 2
console.log("objectOne.property1",objectOne.property1, "objectOne.property2",objectOne.property2)