const Aryan = function(){
    console.log("Aryan")
}

setTimeout(Aryan, 5000); 
// Perform the function a single time after set time

const changeH1 = function(){
    document.querySelector('h1').innerHTML = "TimeSet"
};

const changeme = setTimeout(changeH1, 6000)

document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeme);
})