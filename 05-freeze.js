// const object = {
//     prop:42,
//     prop2: 55
// }

// Object.freeze(object)

// object.prop = 33

// console.log(object.prop)

//seems fairly straight forward 
//further reading suggests child objects can be changed so do you also have to freeze the child object

const complexObject = {
    prop: 1,
    propArray: [0 ,1 ,2 ],
    propObj: {
        firstName: 'Mark',
        lastName: 'Smith',
        age: 20
}
}

Object.freeze(complexObject)

complexObject.prop = 2
complexObject.propArray[0] = 3



console.log("complexObject.prop:",complexObject.prop)
console.log("complexObject.propArray[0]:",complexObject.propArray[0])


Object.freeze(complexObject.propArray)

complexObject.propArray[0] = 4

console.log("complexObject.propArray[0] redefined to 4:",complexObject.propArray[0])

//Test result, you CAN freeze child object/arrays