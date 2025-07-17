// XMLHTTPRequest.readyState

// const xhr = new XMLHttpRequest();
// console.log("UNSENT", xhr.readyState); // readyState will be 0

// xhr.open("GET", "/api", true);
// console.log("OPENED", xhr.readyState); // readyState will be 1

// xhr.onprogress = () => {
//   console.log("LOADING", xhr.readyState); // readyState will be 3
// };

// xhr.onload = () => {
//   console.log("DONE", xhr.readyState); // readyState will be 4
// };

// xhr.send(null);


const requestURL = 'https://api.github.com/users/AryanSrivastava15';
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText);
        console.log(data.followers)
    }
}
xhr.open('GET', requestURL);
xhr.send()