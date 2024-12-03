const displayInput = document.getElementById('inputValue')

//variables
const operators = ['-', '+', '%', '*', '/']
let operations = []
let currValue = ''



//functions and opperations

//handle Interactions
function handleInteraction(value) {
    if(operators.includes(value)) {
        console.log('Clicked an operator: ',value)
        handleOperatorInput(value)
    } else {
        console.log('Clicked a numeric value: ',value)
        handleNumericInput(value)
    }
    updateUI()
}


function handleNumericInput (value) {
    currValue += value
    console.log('NEW VALUE: ',currValue)

}

function handleOperatorInput (value) {
    if (!currValue) {
        return
    }
    operations.push(currValue)
    operations.push(value)
    currValue = ''
}

function handleEvaluate () {

}

function handleReset() {

}
function updateUI () {
    const displayString = operations.join('') + ' '+ currValue
    displayInput.innerText = displayString
}