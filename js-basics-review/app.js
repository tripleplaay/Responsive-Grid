/*
- [ ] String
- [ ] Number
- [ ] Boolean
- [ ] undefined
- [ ] null
- [ ] Object
  - [ ] Array
  - [ ] Function
*/

// var firstName = 'Mickey'
// var lastName = 'Hall'
// var expected = 'Mickey Hall'
//
// var challenge = firstName + ' ' + lastName
//
// if (challenge === expected) {
//   console.log("You'ge got concatenation stuff right!")
// } else {
//   console.log('Try again.')
// }
//
// var message = "You're doing really well"
// var shoutExpected = "YOU'RE DOING REALLY WELL!!!11"
//
// var shoutChallenge = message.toUpperCase() + '!!!11'
//
// if (shoutChallenge === shoutExpected) {
//   console.log("You'ge got string manipulation stuff right!")
// } else {
//   console.log('Try again.')
// }

// This is a function declaration
function myCoolestFunctionEver () {
  console.log('Hey this is my coolest function ever!')
}

function greeting () {
  console.log('Good morning')
}
greeting()

// This is a function execution
// myCoolestFunctionEver()

// function plus1 (number) {
//   number = number + 1
//   return number
// }
// var x = plus1(10)
// console.log('content of x:', x)

function plus5 (number) {
  number = number + 5
  return number
}
var y = plus5(10)
if (y === 15) {
  console.log("You've got plus5() right!")
}
