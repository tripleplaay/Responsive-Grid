var messageContainer = document.getElementById('message')

var buttonHelloWorld = document.getElementById('button-hello-world')
var buttonGoodBye = document.getElementById('button-good-bye')

function sayHelloWorld () {
  messageContainer.innerHTML = 'Hello world!'
}
buttonHelloWorld.addEventListener('click', sayHelloWorld)

function sayGoodBye () {
  messageContainer.innerHTML = 'Good bye!'
}
buttonGoodBye.addEventListener('click', sayGoodBye)
