let score = "33"

console.log(typeof score)

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
//When converting string to number, a non pure integer will also get 
// converted but when it is printed we are returned NaN.

//If null is converted to number we get 0.

// "33" = 33
// "33acsd" = NaN
// null = 0
// true = 1, false = 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)