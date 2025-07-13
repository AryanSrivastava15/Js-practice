// Traversal in JavaScript


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


// Adding Elements in DOM


// const div = document.createElement('div')
// console.log(div);
// div.className = "main"
// div.id = Math.round(Math.random() * 10 + 1)
// div.setAttribute("title", "generated title")
// div.style.backgroundColor = 'green'
// div.style.padding = "12px"
// //div.innerText = "Aryan"  // 1st way to add text
// const text = document.createTextNode("Aryan")  // 2nd way to add text
// div.appendChild(text)

// document.body.appendChild(div)

function addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;
    document.querySelector('.language').appendChild(li)
}

addLanguage("Java")

function addOptimised(langName){
    const li = document.querySelector('li');
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}
// Using .createTextNode and than .appendChild is more optimised as we dont have to traverse complete tree.
addLanguage("GoLang")

// Editing in DOM

const secondLang = document.querySelector("li:nth-child(2)")
// secondLang.innerHTML = "Mojo"
const newli = document.createElement('li')
newli.textContent = "Mojo"
secondLang.replaceWith(newli)

const firstLang = document.querySelector("li:first-child")
console.log(firstLang)
firstLang.outerHTML = '<li>TyperScript</li>'

// Removing in DOM

const lastLang = document.querySelector("li:last-child");
lastLang.remove()

function remove(LangNumber){
    const position = document.querySelector("li:nth-child(`${LangNumber}`)");
    position.remove();
} // Not correctly working