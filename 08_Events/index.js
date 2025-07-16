// Events in Js run sequentially.

// const owl = document.querySelector('#owl')
// owl.onclick = function(){
//     alert('owl')
// }

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log(e);
//     // Internal methods we get with Event Listener
//     // type, timestamp, defaultPrevented
//     // target, toElement, srcElement, currentTarget
//     // clientX, clientY, screenX, screenY
//     //altKey, ctrlKey, shiftKey, keyCode
// }, false);
// What is false parameter for? (fault is default in the third parameter)
/* It is event propogation */

// document.getElementById('images').addEventListener('click', function(e){
//     console.log("Ckicket inside the ul");
// }, false)

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("Ckicked inside the owl");
//     e.stopPropagation();
// }, false)

// document.getElementById('google').addEventListener('click', function(e){
//     console.log('Clicked Google');
//     e.stopPropagation(); // This stops bubbling up so the other events listener dont affect this.
//     e.preventDefault();
// })

// Image Vanishing Project (OnClick images are removed)

const images = document.querySelector('#images');

images.addEventListener('click', function(e){
    if(e.target.tagName === 'IMG'){
        let removeIt = e.target.parentNode;
    removeIt.remove();
    }
    // Another way: removeIt.parentNode.removeChild(removeIt);
}, false)