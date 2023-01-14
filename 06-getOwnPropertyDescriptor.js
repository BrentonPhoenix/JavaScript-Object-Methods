// const object1 = {
    //     property1: 42
    // }
    
    // const descriptor1 = Object.getOwnPropertyDescriptor(object1,'property1')
    
    // console.log("descriptor1:", descriptor1)
    // //descriptor1: { value: 42, writable: true, enumerable: true, configurable: true }
    // console.log("descriptor1.configurable:", descriptor1.configurable)
    // //descriptor1.configurable: true
    // console.log("descriptor1.value:", descriptor1.value)
    // //descriptor1.value: 42
    
    
    
    const object2 = {
        property1: 40
    }
    object2.property1 = 34
    
    // object2.property1 = 3 --> still doesn't want to let me reassign it.
    const descriptor2 = Object.getOwnPropertyDescriptor(object2,'property1')
    
// object2.property1 = 3 ------->throws an error that says object2 is not defined even if setting it after Object.freeze doesn't (mind it still doens't overwrite object2.property1 since at that point it has been frozen. Is the freeze method hoisted or something?)
// Object.freeze(object2)


console.log("descriptor2:", descriptor2)
//descriptor1: { value: 42, writable: true, enumerable: true, configurable: true }
console.log("descriptor2.configurable:", descriptor2.configurable)
//descriptor1.configurable: true
console.log("descriptor2.value:", descriptor2.value)
//descriptor1.value: 42
console.log("object2.property1:" ,object2.property1)


//seems like it might be an issue with github/the program. everytime it happens it opens up the working tree of this file which is blank. I'm going to try stashing the changes and then run it again.(and possible restart my computer: "have you tried turning it off and on again? do that.")