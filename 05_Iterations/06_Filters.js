const coding = ["js", "java", "c++", "ruby", "python"]

coding.forEach(element => {
    // console.log(element)
});

coding.forEach(function (item) {
    // console.log(item)
})

function printMe(item){
    // console.log(item)
}

coding.forEach(printMe)

// coding.forEach((element, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "Js"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    }
]

myCoding.forEach((item) => {
    // console.log(item.languageName)
})

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//     return num > 4
// })

// const newNums = []

// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums)

const books = [
    {title: 'Book 1', genre: 'Fiction', published: 1981, edition: 2003},
    {title: 'Book 2', genre: 'Non - Fiction', published: 1992, edition: 2008},
    {title: 'Book 3', genre: 'History', published: 1999, edition: 2007},
    {title: 'Book 4', genre: 'Non - Fiction', published: 1989, edition: 2010},
    {title: 'Book 5', genre: 'Science', published: 2009, edition: 2014},
    {title: 'Book 6', genre: 'Fiction', published: 1987, edition: 2010},
    {title: 'Book 7', genre: 'History', published: 1986, edition: 1996},
    {title: 'Book 8', genre: 'Science', published: 2011, edition: 2016},
    {title: 'Book 9', genre: 'Non - Fiction', published: 1981, edition: 1989}
]

let userBooks = books.filter((bk) => {
    return bk.genre === 'History'
})

userBooks = books.filter((bk) => {
    return bk.published < 2000 && bk.genre === 'Fiction'
})

console.log(userBooks);
