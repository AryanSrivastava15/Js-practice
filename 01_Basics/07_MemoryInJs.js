// ++++++++++++++++++++++++ Memory in Js ++++++++++++++++++++++++

//Two type:
/*
1. Stack used in Primitive Data Types
-> When a copy is made in this and make changes to the copy iy doesn't
   affect the original value
-> Example: */
    let myYoutubeName = "Aryan"
    let anotherName = myYoutubeName
    anotherName = "Harry"
    console.log(myYoutubeName)
    console.log(anotherName)
/*
2. Heap used in Non-Primitive Data Types
-> If two varible have given same value than they reference to the same
   value in the Heap, like if num1 = 52 and num2 = num1 that means there
   is a value 52 in heap which is referenced by both num1 and num2.
-> If any change is made to that value changes will be seen in all the 
   variables who are referencing to it.
-> Example:
*/
let userOne = {
    email: "asdf@google.com",
    upi: "asdf@ybl"
}

let userTwo = userOne

userTwo.email = "ghjk@google.com"

console.log(userOne.email)
console.log(userTwo.email)