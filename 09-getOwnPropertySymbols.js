const objectOne = {}
const a = Symbol("a")
const b = Symbol("b")


objectOne[a] = 'localSymbol'
objectOne[b] = 'globalSymbol'



const objectSymbols = Object.getOwnPropertySymbols(objectOne)


console.log( "objectSymbols.length" , objectSymbols.length )
//2

console.log("objectSymbols", objectSymbols)
//objectSymbols [ Symbol(a), Symbol(b) ]


console.log("objectSymbols[0]", objectSymbols[0])
//Symbol(a)


console.log("objectSymbols[1]", objectSymbols[1])
//Symbol(b)



console.log("objectOne[a]", objectOne[a])
//localSymbol

console.log("objectOne[b]", objectOne[b])
//objectOne[b] globalSymbol



//Ok so I had to look up what symbols were used for according to mdn web docs its often used to add unique property keys to an object that wont collide with keys any other code might add to the object, which are hidden from any mechanisms other code will typically use to access the object.
//it apparently enables a weak form of encapsulation or a weak form of information hiding
//seems like it would be more fun to call them Ghost Keys, there is an API called Ghost so it would probably be confusing to use that term :(
//Ok so an alternate method to sort things? I wonder how that works in practice