const person ={
    isHuman: false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`)
    }
}

const me = Object.create(person)

me.name = 'Phoenix'
me.isHuman = "¯\\_(ツ)_/¯"
//lol had to duplicate the backslash, escape character thing maybe???

me.printIntroduction()

const notMe = Object.create(person)

notMe.name = "Matthew"
notMe.isHuman = true
notMe.printIntroduction = function(){
    console.log(`${this.name}? That's not me. Is he human? ${this.isHuman}`)
}


notMe.printIntroduction()