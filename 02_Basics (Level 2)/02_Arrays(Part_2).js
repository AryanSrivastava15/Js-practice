const marvelHeros = ["Iron Man", "SpederMan", "Doctor Strange"]

const dcHeros = ["Batman", "Flash", "Superman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros) // it will take the dcHeroes array as an element in the marvelHeroes array

const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros)

const allHeros2 = [...marvelHeros, ...dcHeros]
// console.log(allHeros2)

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArr = anotherArr.flat(Infinity)
// console.log(realAnotherArr)

// console.log(Array.isArray("Aryan"))
// console.log(Array.from("Aryan"))
// console.log(Array.from({
//     name: "aryan"
// })) //interesting as we need to tell if we need the array of the keys or something else

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))