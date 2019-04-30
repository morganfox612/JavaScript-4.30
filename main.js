function lightTheme() {
  document.body.style.backgroundColor = '#fff'
  document.body.style.color = '#333'
}

function darkTheme() {
  document.body.style.backgroundColor = '#333'
  document.body.style.color = '#fff'
}

function sepiaTheme() {
  document.body.style.backgroundColor = '#cc9d68'
  document.body.style.color = '#333'
}

function turnPage() {
  let screen = document.getElementById('screen')
  screen.classList.add('page')
  setTimeout(function() {
    scren.classList.remove('page')
  }, 1400)
}
