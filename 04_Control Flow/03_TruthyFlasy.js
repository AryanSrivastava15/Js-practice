// const userEmail = "Aryan@vitb.com"

// if(userEmail){
//     console.log("Got User Email")
// } else {
//     console.log("Dont have User Email")
// }

/*
Falsy Values:
    1. false
    2. 0
    3. -0
    4. BigIbt 0n
    5. Empty String
    5. null
    6. undefined
    7. NaN

Truthy Values:
    1. "0"
    2. "false"
    3. " "
    4. []
    5. function(){} [empty function]
    6. etc..........
*/

/*
1. false == 0 results in true
2. false == "" results in true
3. "" == 0 results in true
*/

// Check empty Object

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty")
// }

// Check empty array

// const Arr = []

// if(Arr.length === 0){
//     console.log("Array is empty")
// }

// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10
// console.log(val1)
// val1 = null ?? 10
// console.log(val1)
// val1 = undefined ?? 15
// console.log(val1)
// val1 = null ?? undefined ?? 15
// console.log(val1)

// Terniary Operator
// condition ? true:false

const icedTeaPrice = 100

icedTeaPrice <= 80 ? console.log("Less than 80") : console.log("Greater than 80")