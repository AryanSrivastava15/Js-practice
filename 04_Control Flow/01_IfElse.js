/*
1. if statement

Syntax:
if(condition){

}
condition example: i. 2 == 2
                   others: >, <, <=, >=, ==, !=, ===, !==, !condition
*/

// const isUserLoggedIn = true

// if(isUserLoggedIn){
//     console.log("Hello")
// }

// const score = 200

// if(score > 100){
//     const power = "fly" // scope of power is in the if block only
//     console.log(`User Power: ${power}`)
// }

const balance = 1000

// if(balance > 500) console.log("test"); //implicit scope, only has single line but can have multiple lines with comma and ends with exclamation (;)

// If-else statement
// if(balance < 500){
//     console.log("Less than")
// } else if(balance < 750){
//     console.log("Less than 750")
// } else {
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedWithGoogle = true
const loggedWithMail = false

if(userLoggedIn && debitCard && (loggedWithGoogle || loggedWithMail)){
    console.log("Allow to buy course")
}