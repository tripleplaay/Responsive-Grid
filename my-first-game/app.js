document.addEventListener('keydown', moveBox)

function moveBox (ev) {
  console.log('moveBox executing.')
  // arrow down: 40
  // arrow up: 38
  // arrow left: 80
  // arrow right: 90

  if (ev.keyCode === 38) {
    moveBoxUp()
  } else if (ev.keyCode === 40) {
    moveBoxDown()
  } else if (ev.keyCode === 80) {
    console.log('I should move the box to the left')
  } else if (ev.keyCode === 90) {
    console.log('I should move the box to the right')
  }
}

function getPosition () {
  return document.querySelector('.box').getBoundingClientRect()
}

function moveBoxUp () {
  var box = document.querySelector('.box')
  var position = getPosition()
  var newTopPosition = position.top - 10
  console.log('newTopPosition', newTopPosition)
  box.style.top = newTopPosition + 'px'
}

function moveBoxDown () {
  var box = document.querySelector('.box')
  var position = getPosition()
  var newTopPosition = position.top + 10
  box.style.top = newTopPosition + 'px'
}
