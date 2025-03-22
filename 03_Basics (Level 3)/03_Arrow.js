const user = {
    username: "Aryan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the website.`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Ayush"
// user.welcomeMessage()

// console.log(this)

// function one(){
//     let username = "Aryan"
//     console.log(this.username) // results in undefined
// }

// one()

// const one = function() {
//     let username = "Aryan"
//     console.log(this.username)
// }

const one = () => {
    let username = "Aryan"
    console.log(this.username)
}

// one()

// Arrow function basic syntax

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } // can also be written as
const addTwo = (num1, num2) => num1 + num2 // implicit return

console.log(addTwo(1, 5))