const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')

let calculation = []
let accumulativeCalculation
let counterElm = 0
let clicks = 0;

function calculate (button) {
  const value = button.textContent
  if (value == "CLEAR") {
    calculation = []
    screenDisplay.textContent = '.'
    document.getElementById("clicks").innerHTML = null;
    clicks = null
    } else if (value === "=") {
     screenDisplay.textContent = eval(accumulativeCalculation)
    } else {
    calculation.push(value)
    accumulativeCalculation = calculation.join('')
    screenDisplay.textContent = accumulativeCalculation
  }

  onClick()

}


function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
  if (clicks >= 12 || calculation.length >= 12) {
    screenDisplay.textContent = 'ERROR'
  }
};

buttons.forEach(button => button.addEventListener('click', () => calculate(button),))

