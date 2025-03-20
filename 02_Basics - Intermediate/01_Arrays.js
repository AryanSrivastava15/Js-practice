const myArr = [0, 1, 2, 3, 4, 5] // Can have different types of elements

// Js Arrays are resizable
// Not associative
// console.log(myArr[1])

const myHeroes = ["hero1", "hero2"]

const arr2 = new Array(1, 2, 3, 4)
// arr2.push(5)
// console.log(arr2)
// console.log(arr2.length)
// arr2.pop()
// console.log(arr2)

arr2.unshift(0) // add to the start of array
arr2.shift() //removes first element
// console.log(arr2)

// console.log(arr2.includes(7))
// console.log(arr2.indexOf(2))

const newArr = arr2.join()
// console.log(arr2)
// console.log(newArr)

console.log("A", myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)
console.log ("C", myArr)
console.log(myn2)