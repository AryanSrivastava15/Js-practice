let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)

let myCreatedDate1 = new Date(2024,0,25)
let myCreatedDate2 = new Date("2024-01-25")
let myCreatedDate3 = new Date("01-25-2024")
// console.log(myCreatedDate1.toDateString())
// console.log(myCreatedDate2.toDateString())
// console.log(myCreatedDate3.toDateString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate1.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
// console.log(newDate)
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())

// `${newDate.getDay()} and the time`

console.log(
    newDate.toLocaleDateString('default', {
        weekday: "long",
        month: "2-digit",
        day: "2-digit",
        era: "long"
    })
)