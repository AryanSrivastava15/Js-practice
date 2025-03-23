// for of Loops

const arr = [1, 2, 3, 4, 5]

// for (const val of arr) {
//     console.log(val)
// }

const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// Maps

const map = new Map()
map.set('In',"India")
map.set('USA',"America")
map.set('Fr', "France")

// console.log(map)

for (const [key, value] of map) {
    console.log(key, ' : ', value)
}

const myObject = {
    'game1': "NFS",
    'game2': "Speder-Man"
}

for (const [key, value] of myObject) {
    // console.log(key, ' : ', value) // Objects are not iterable like this
}