const objectOne = {
    prop1: 42,
    prop2:43,
    prop3: {
        firstName: "bill",
        lastName: "nye",
        title: "the science guy"}
}

const descriptors1 =Object.getOwnPropertyDescriptors(objectOne)

// console.log("objectOne:",objectOne)

// console.log("objectOne:",objectOne)

// console.log("descriptors1:",descriptors1)

// console.log("descriptors1.writable:",descriptors1.writable) gets undefined which is interesting I suppose it has to do with how javascript handles variables as opposed to object properties. I wonder if it would be the same using var and or let?

let objectTwo = {
    prop1: 50,
    prop2:51,
    prop3: {
        firstName: "jeff",
        lastName: "dunham",
        title: "silence i kill you"}
}

const descriptors2 = Object.getOwnPropertyDescriptors(objectTwo)

// console.log("objectTwo:",objectTwo)

// console.log("objectTwo.writable:",objectTwo.writable)

// console.log("descriptors1:",descriptors1)

// console.log("descriptors1.writable:",descriptors1.writable)
//still doesn't work

let objectThree = {
    prop1: 60,
    prop2:61,
    prop3: {
        firstName: "John",
        lastName: "Mulaney",
        title: "There is a horse loose in the hospital!"}
}

const descriptors3 = Object.getOwnPropertyDescriptors(objectThree)

// console.log("objectThree:",objectThree)

// console.log("objectThree.writable:",objectThree.writable)

// console.log("descriptors3:",descriptors3)

// console.log("descriptors3.writable:",descriptors3.writable)

//endNotes: i wonder if I set it in another object if it would work...

const objectFour = {
    title: objectThree,
    prop1: 4
}

const descriptors4 = Object.getOwnPropertyDescriptors(objectFour)

console.log("objectFour:",objectFour)

console.log("objectFour.writable:",objectFour.title.writable)

console.log("descriptors4:",descriptors4)

console.log("descriptors4.writable:",descriptors4.title.writable)

//huh it does work interesting, for key value pairs "only" then