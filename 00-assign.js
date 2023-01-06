// const first = {x: 10, y: 12, z: 13};  
// const second = Object.assign({x: 3, z: 4, w: 5}, first);  
// console.log(second.z );
// console.log(second.w );
// console.log(second.x);

// Object.assign(target, sources)

// let first = {a: 1, b: 2, c: 3}
// let second = Object.assign({b: 7, a: 4, y: 144}, first)
// console.log(second)
// console.log(first)
// console.log(second.y, second.a)

//Does this work with arrays... Google says yes
//SCIENCE time

let arrayOne = ["despair","war","famine","hope"]
let hopefullyANewObject = Object.assign({},arrayOne)

console.log("Hopefully a new object", hopefullyANewObject)

//turns the array position into the key with the value being the value still. 
//Seems a decent way to turn an array into an object if you dont want to mess around with the spread operator.
let objectTwo = {...arrayOne}
console.log("objectTwo" ,objectTwo)

//as expected these have the same result. good to know various ways of doing things since sometimes things get depricated 