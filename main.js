//==========Exercise #1 ===========//
// /*
// Write a function that parses through the below object and displays all of their
// favorite food dishes as shown:
// */

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function favFood(person3){
    if(typeof(person3)=='object'){
        for(let i = 0; i < Object.keys(person3).length; i++){
            favFood(Object.values(person3)[i])
         }
    }
    
    if(typeof(person3)=='string'){
        console.log(person3)
    }
}

favFood(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
function Person(name,age){
    this.name = name;
    this.age = age;
    this.printInfo = () => {
        return(`${this.name}'s age is ${this.age}`);
    }
    this.addThree = () => {
       addAge = age + 3
       return(`${this.name}'s age is ${addAge} `)
    }
}

let shawn = new Person('Shawn',33);
let chris = new Person('Chris',39);

console.log(shawn.printInfo())
console.log(chris.printInfo())

console.log(shawn.addThree())
console.log(chris.addThree())


// =============Exercise #3 ============//
// /*

//     Create a Promised based function that will check a string to determine if it's length is greater than 10.
//     If the length is greater than ten console log "Big word". 
//     If the length of the string is less than 10 console log "Small Number"

//*
const isBigWord = (string) => {
    return new Promise( (resolve,reject) => {
        if(string.length >= 10){
            resolve(`Big Word`)
        } else {
            reject(`Small Number`)
        }
    })
}

isBigWord('I am checking the sting for its size.')
.then( (result)  => {
    console.log(`${result}`)
})

.catch( (reject) => {
    console.log(`${reject}`)
})
