let count = 0
let countElement = document.getElementById('count-el')
let saveElement = document.getElementById('save-el')

function increment() {
  count += 1
  countElement.textContent = count
}

function save() {
  let result = count + ' - '
  saveElement.textContent += result
  countElement.textContent = 0
  count = 0
}
