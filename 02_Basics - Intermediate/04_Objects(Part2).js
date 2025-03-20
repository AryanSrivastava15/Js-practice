//Object Singleton

const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "sam@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Aryan",
            lastName: "Srivastava"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "one@gmail.com"
    },
    {
        id: 2,
        email: "two@gmail.com"
    }
]

// console.log(users[1].email)
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggeIn'))