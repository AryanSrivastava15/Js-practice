var c = 300 // global scope
let a = 200

if(true){ // block scope
    let a = 10
    const b = 20
    var c = 30
    // console.log(a) // will print block scope variable value
}

// console.log(a) // in scope of if statement
// console.log(b) // in scope of if statement
// console.log(c) // will return 30 thats why var will not be used
// console.log(a) // will print global scope variable value

//windows global scope and node global scope are different.

function one(){
    const userName = "Aryan"

    function two(){
        const website = "Github"
        console.log(userName)
    }
    // console.log(website)

    two()
}

// one()

if(true){
    const userName = "Aryan"
    if(userName === "Aryan"){
        const website = "Github"
        // console.log(userName + website)
    }
    // console.log(website) //Error
}
// console.log(userName) //Error


//Interesting
console.log(addOne(4)) //Can access

function addOne(num){
    return num + 1
}

console.log(addOne(5)) //Can access

// console.log(addTwo(4)) //Cannot 

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5)) //Can