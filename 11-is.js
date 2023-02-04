console.log( 'Object.is("1", 1)' , Object.is("1", 1) )
//false
console.log( 'Object.is(NaN,NaN)' , Object.is(NaN,NaN) )
//true
console.log( 'Object.is(-0,0)', Object.is(-0,0))
//false
const obj = {}
console.log( 'Object.is(obj,{})' , Object.is(obj,{}))

//false
let testVar1;
testVar1 = 1
console.log( 'Object.is(testVar1,1)' , Object.is(testVar1,1))
//true
console.log( 'Object.is([],[])' , Object.is([],[]))
//This is false, interesting that two empty objects/arrays evaluate to false. 

//This one is simple it determines whether two values are the same value.
