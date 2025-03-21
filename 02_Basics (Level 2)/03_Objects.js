// singleton: a single object of its type made by a constructor.
// if declared as a literal singleton will not be formed

// Object Literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Aryan",
    [mySym]: "myKey1", // [] required for Symbol datatype
    age: 18,
    location: "MP",
    email: "Aryan@vitb.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])

JsUser.age = 19
// console.log(JsUser.age)
// Object.freeze(JsUser) // No further changes can be made now.
// console.log(JsUser)
JsUser.greetings = function(){
    console.log("Hello Js User")
}

JsUser.greetings2 = function(){
    console.log(`Hello Js User, ${this.name}`)
}


// console.log(JsUser.greetings())
JsUser.greetings()
JsUser.greetings2()