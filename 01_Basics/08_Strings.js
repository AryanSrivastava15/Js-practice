// Concatenation in Strings
let name = "Aryan"
let repoCount = 15
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String('Aryan')
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

// Other Methods
/* 
1. x.subString(startNum, endNum[excluding])
2. x.slice(startNum, endNum) [Values can be negative]
3. x.trim() ==> remove unwanted space from the string
4. x.replace('findToReplace', 'toReplaceWith')
5. x.toLowerCase()
6. x.includes('')
7. x.split('onTheBasisOf')
8. x.concat(' ', ' ')
*/