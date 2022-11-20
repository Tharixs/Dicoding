const calculator = {
    displayNumber: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
}

const displayNumber = () => {
  document.querySelector('#displayNumber h1').innerText = calculator.displayNumber;
}

const clearCalculator = () => {
    calculator.displayNumber = '0';
    calculator.firstOperand = null;
    calculator.operator = null;
    calculator.waitingForSecondOperand = false;
    
}

const inputValue = (value) => {
    if (calculator.displayNumber === '0') {
        calculator.displayNumber = value;
    }
    else {
        calculator.displayNumber += value;
    }
}

const buttons = document.querySelectorAll('div.button');
for (const button of buttons) {
    button.addEventListener('click', (event) => {
      const target = event.target;
      
      if (target.classList.contains('clear')) {
        clearCalculator();
        displayNumber();
        return;
      }
      if (target.classList.contains('invers')) {
        inversNumber();
        displayNumber();
        return;
      }
      if (target.classList.contains('equals')) {
        performanceCalculation();
        displayNumber();
        return;
      }
      if (target.classList.contains('operator')) {
        hendleOperator(target.innerText);
        return;
      }
        inputValue(target.innerText);
        displayNumber();
    }
    );
}


  const inversNumber = () => {
    if (calculator.displayNumber === '0') {
      return;
    } else {
      calculator.displayNumber = calculator.displayNumber * -1;
    }
  }


  const hendleOperator = (operator) => {
      calculator.operator = operator;
      calculator.waitingForSecondOperand = true;
      calculator.firstOperand = calculator.displayNumber;
      calculator.displayNumber = '0';
  }

  const performanceCalculation = () => {
    if (calculator.firstOperand === null || calculator.operator === null) {
      return;
      
    }
  var result = 0;
    
     if (calculator.operator == '-') {
      result = parseInt(calculator.firstOperand) - parseInt(calculator.displayNumber);
    } else if (calculator.operator == '+') {
      result = parseInt(calculator.firstOperand) + parseInt(calculator.displayNumber);
    } else if (calculator.operator == '/') {
      result = parseInt(calculator.firstOperand) / parseInt(calculator.displayNumber);
    }
    const history = {
      firstNumber: calculator.firstOperand,
      secondNumber: calculator.displayNumber,
      operator: calculator.operator,
      result: result
  }
  putHistory(history);
  calculator.displayNumber = result;
  renderHistory();
  }