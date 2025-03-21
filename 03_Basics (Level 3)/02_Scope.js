var c = 300 // global scope
let a = 200

if(true){ // block scope
    let a = 10
    const b = 20
    var c = 30
    console.log(a) // will print block scope variable value
}

// console.log(a) // in scope of if statement
// console.log(b) // in scope of if statement
// console.log(c) // will return 30 thats why var will not be used
console.log(a) // will print global scope variable value

//windows global scope and node global scope are different.