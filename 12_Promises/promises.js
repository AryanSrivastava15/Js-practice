const promiseOne = new Promise(function(resolve, reject){
    //Do an async tasks like DB Calls, Cryptography, network call etc
    setTimeout(function(){
        console.log('Async task is complete.')
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    //Do an async tasks like DB Calls, Cryptography, network call etc
    setTimeout(function(){
        console.log('Async task 2 is complete.')
        resolve();
    },1000)
}).then(function(){
    console.log("Promise 2 Consumed");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: "Aryan", email: "example@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName: "Aryan", password: "123"});
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.userName;
}).then((userName) => {
    console.log(userName);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Promises is resolved or rejected");
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName: "JavaScript", password: "123"});
        } else {
            reject('ERROR: Js went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}
// Async await cannot resolve errors so than we can use try catch block
consumePromiseFive()


// async function getAllUsers(params) {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error)
})