// const parent = document.querySelector('.parent')
// // console.log(parent);
// // console.log(parent.children[1].innerHTML);

// for(let i = 0; i < parent.children.length; i++){
//     // console.log(parent.children[i].innerHTML)
// }
// parent.children[1].style.color = 'green';

// // console.log(parent.firstElementChild)
// // console.log(parent.lastElementChild)

// const dayOne = document.querySelector('.day')
// // console.log(dayOne)
// // console.log(dayOne.parentElement)
// // console.log(dayOne.nextElementSibling)

// console.log("NODES: ", parent.childNodes)
// //Every line break and comments and code are part of the tree structure in a NodeList.

const div = document.createElement('div')
console.log(div);
div.className = "main"
div.id = Math.round(Math.random() * 10 + 1)
div.setAttribute("title", "generated title")
div.style.backgroundColor = 'green'
div.style.padding = "12px"
//div.innerText = "Aryan"  // 1st way to add text
const text = document.createTextNode("Aryan")  // 2nd way to add text
div.appendChild(text)

document.body.appendChild(div)