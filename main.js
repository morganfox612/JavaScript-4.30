let x = document.getElementById('profileBtn')
let para = document.getElementsByClassName('para')

// function functionName() {}
funciton hideElement() {
  para[3].classList.add('hidden')
}

// thisIsCalled camelCase
// this_is_called snake_case

// takes arguments: 1. the evnt, 2. the funtion to run when event happens.
para[0].addEventListener('click', hideElement)
