function depositMoney() {
  let amount = prompt('How much do you want to deposit?')
  let bal = document.querySelector('#bank-balance')
  let currentBal = bal.innerText
  let total = parseInt(currentBal) + parseInt(amount)
  bal.innerText = total
}

function withdrawMoney() {
  let amount = prompt('How much do you want to withdraw?')
  let history = document.querySelector('#history')
  let bal = document.querySelector('#bank-balance')
  let currentBal = bal.innerText
  let total = parseInt(currentBal) - parseInt(amount)
  bal.innerText = total
  if (total <= 0) {
    bal.classList.add('negative-balance')
  }
  history.innerHTML += '<p>You withdrew ' + amount + '</p>'
}
