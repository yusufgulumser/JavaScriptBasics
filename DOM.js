// creating a h2 element and appending to a web page's body
const h2=document.createElement('h2')
h2.innerText="This is text"
h2.setAttribute('id','sub-heading')
h2.setAttribute('class','secondary')
document.body.appendChild(h2);

// Selectors

document.querySelector('p')
document.querySelectorAll('p')
document.getElementById('heading')
document.getElementsByClassName('txt')

// Event Handling

const target= document.querySelector('body')       
function handleClick(){
    console.log("clicked the body")          // whenever we click the body it prints this line
}
target.addEventListener('click',handleClick)  // addEventListener(type of event,the event func)

// in js file
function handleClick2(){
    console.log("cliked the heading")
}
// in html file
<h1 onclick="handleClick2()"> The title </h1>

