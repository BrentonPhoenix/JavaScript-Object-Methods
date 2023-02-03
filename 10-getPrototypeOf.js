const prototypeOne = {}
const objectOne = Object.create(prototypeOne)

// console.log(Object.getPrototypeOf(objectOne) === prototypeOne)
//true

class Person {
    constructor(firstName){
        this.firstName = firstName
    }
    greet(){
        console.log(`Hi ${this.name}, it's nice to meet you`)
    }
}

class Woman extends Person{
    constructor(firstName,gender, pronouns){
        super(firstName)
        this.gender = gender
        this.pronouns = pronouns
    }
}

let sally = new Woman('Sally','female','she/her')

console.log('sally' , sally)
//sally Woman { firstName: 'Sally', gender: 'female', pronouns: 'she/her' }
console.log("Object.getPrototypeOf(sally)" , Object.getPrototypeOf(sally))
//Object.getPrototypeOf(sally) Person {}
console.log("Person: " , Person)
//[class Person]
// console.log("...Person: " , ...Person)
//even if it gives it to you as an array you cannot destructure [class Person]

//prototype vs classes seems to be a personal flavour type thing, that is a relic from the past where computers were less advanced and it doesn't matter currently. This seems useful if you're using/refactoring old javaScript before ES6 as property inheritance was less structured. For classes you have to know what you're extending in order to extend the class so this is somewhat less useful. Maybe if you a bunch of nesting classes and lost track... but ctrl + f exists for a reason.