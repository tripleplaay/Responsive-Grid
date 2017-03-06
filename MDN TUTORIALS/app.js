console.log('app.js running.')

function createParagraph () {
  var para = document.createElement('p')
  para.textContent = 'You clicked the button!'
  document.body.appendChild(para)
}

var b = document.querySelector('button')
console.log('contents of `b`:', b)

// DOM: Document Object Model

b.addEventListener('click', createParagraph)

// function doSomething (whatToDo) {
//   console.log('start of doSomething')
//   console.log("Doing what I've assigned to:")
//   whatToDo()
//   console.log('end of doSomething')
// }
// function greeting () {
//   console.log('Good morning')
// }
// doSomething(greeting)
