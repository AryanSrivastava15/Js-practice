const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) // gives decimal precision to 2 digits

const otherNum = 23.8966

// console.log(otherNum.toPrecision(5)) 

const hundreds = 1000000

// console.log(hundreds.toLocaleString('en-IN')) 

/*
1. x.MIN_VALUE
2. x.MAX_VALUE
*/

//MATHS

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.1))
// console.log(Math.floor(4.9))
// console.log(Math.sqrt(4))
// console.log(Math.max(1,2,3,4))
// console.log(Math.min(1,2,3,4))

// console.log(Math.random())
// console.log((Math.random() * 10) + 1)

const min = 15
const max = 200

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //imp