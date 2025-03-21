function sayMyName() {
    console.log("A")
    console.log("R")
    console.log("Y")
    console.log("A")
    console.log("N")
}

// sayMyName()

function addTwoNumber(number1, number2) {
    console.log(number1 + number2)
}

const result = addTwoNumber(3, 2) // returns undefined if in func it is console.log
// console.log(result)

function addTwoNumber(number1, number2) {
    let result = number1 + number2
    return result
    // return number1 + number2
}

// console.log(addTwoNumber(2, 3))

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in.`
}

loginUserMessage()
// console.log(loginUserMessage("Aryan"))