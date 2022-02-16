/* Membuat Object Calculator */ 
const calculator = {
  displayNumber: '0',
  operator: null,
  firstNumber: null,
  waitingForSecondNumber: false
};

/* Fungsi untuk meng-update angka pada layar */
function updateDisplay() {
  document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

/* Fungsi untuk menghapus data pada kalkulator */ 
function clearCalculator() {
  calculator.displayNumber = '0';
  calculator.operator = null;
  calculator.firstNumber = null;
  waitingForSecondNumber = false;
}

/* Fungsi Negative */
function inverseNumber() {
  if(calculator.displayNumber === '0') {
    return;
  }
  calculator.displayNumber = calculator.displayNumber * -1;
}

/* Fungsi Operator */
function handleOperator(operator) {
  if(!calculator.waitingForSecondNumber) {
    calculator.operator = operator;
    calculator.waitingForSecondNumber = true;
    calculator.firstNumber = calculator.displayNumber;
    
    // mengatur ulang nilai display number agar tombol selanjutnya mulai dari awal lagi
    calculator.displayNumber = '0';
  } else {
    alert('Operator sudah ditetapkan')
  }
}

/* Fungsi Calculation */
function performCalculation() {
  if(calculator.operator === "+") {
    result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
  } else {
    result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
  }

  calculator.displayNumber = result;
}

/* Fungsi untuk memasukkan angka */ 
function inputDigit(digit) {
  calculator.displayNumber += digit;
}

/* Variabel buttons */
const buttons = document.querySelectorAll(".button");
/* Event Listener */ 
for (let button of buttons) {
  button.addEventListener('click', function(event) {
    // mendapatkan objek elemen yang diklik
    const target = event.target;
    // jika klik clear
    if(target.classList.contains('clear')) {
      clearCalculator();
      updateDisplay();
      return;
    }

    if(target.classList.contains('negative')) {
      inverseNumber();
      updateDisplay();
      return;
    }

    if(target.classList.contains('equals')) {
      performCalculation();
      updateDisplay();
      return;
    }

    if(target.classList.contains('operator')) {
      handleOperator(target.innerText);
      return;
    }

    inputDigit(target.innerText);
    updateDisplay()
  });
}

/* Logika percabangan */
function inputDigit(digit) {
  if(calculator.displayNumber === '0') {
    calculator.displayNumber = digit;
  } else {
    calculator.displayNumber += digit;
  }
}

