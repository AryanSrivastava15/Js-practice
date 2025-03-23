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
    console.log(item.languageName)
})