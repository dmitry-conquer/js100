const currentValueText = document.getElementById('current-value');
const resultText = document.getElementById('result');
const numbers = document.querySelectorAll('[data-number-value]');
const operators = document.querySelectorAll('[data-operator-value]');
const eqvButton = document.getElementById('eqv');

const calculator = {
  init() {
    this.isFirstNum = true;
    this.currentOperator = '';
    this.currentValue = '';
    this.result = '';
    this.inputNumbers();
    this.inputOperator();
    this.initListeners();
  },

  inputNumbers() {
    numbers.forEach(num => {
      if (num) {
        num.addEventListener('click', () => {
          this.currentValue += num.dataset.numberValue;
          this.changeCurrentValue(this.currentValue);
        });
      }
    });
  },

  inputOperator() {
    operators.forEach(operator => {
      if (operator) {
        operator.addEventListener('click', () => {
          if (this.currentValue) {
            if (this.result !== '') {
              this.handleEqv(false);
            } else {
              this.result = this.currentValue;
              this.currentValue = '';
            }
            this.currentOperator = operator.dataset.operatorValue;
            resultText.textContent = `${this.result} ${this.currentOperator}`;
          }
        });
      }
    });
  },

  handleEqv(isEqv) {
    switch (this.currentOperator) {
      case '+':
        this.result = +this.result + +this.currentValue;
        break;
      case '-':
        this.result = +this.result - +this.currentValue;
        break;
      case '*':
        this.result = +this.result * +this.currentValue;
        break;
      case '/':
        this.result = +this.result / +this.currentValue;
        break;

      default:
        console.log('not ready');
        break;
    }
    this.changeCurrentValue(this.result);
    if (!isEqv) {
      resultText.textContent = `${this.result} ${this.currentOperator}`;
      this.currentValue = '';
    } else {
      resultText.textContent = `= ${this.result}`;
      this.currentValue = this.result;
      this.result = '';
    }
  },

  initListeners() {
    if (eqvButton) {
      eqvButton.addEventListener('click', () => {
        this.handleEqv(true);
      });
    }
  },

  changeCurrentValue(value) {
    currentValueText.textContent = value;
  },
};

export default calculator;
