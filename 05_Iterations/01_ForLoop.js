// For Loop
// const array = [1, 2, 3, 4 ,5, 6]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
//     for(let j = 0; j < 10; j++){
//         const number = j;
//         console.log(j + index)
//     }
// }

// Js dont have out of bound errors instead returns undefined

// break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5")
        break; // Ends the loop without running further iterations
    }
    console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5")
        continue; // Ignore this loop and moves to next iterations 
    }
    console.log(`Value of i is ${index}`);
}