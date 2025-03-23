const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: "Ruby",
    swift: "Swift by Apple"
}

for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

// In arrays For In will print the keys and can get the values by arr[key].

const map = new Map()
map.set('In',"India")
map.set('USA',"America")
map.set('Fr', "France")

// for (const key in map) {
//     console.log(key)
// }
// Important: Maps are not iteratable like this