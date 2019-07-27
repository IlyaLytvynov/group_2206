import './lesson_10.scss';
const numbers = [];
const btnLogIn = document.querySelector('#btn');
const btnAddNumber = document.querySelector('#addNumberBtn');
const output = document.querySelector('#output');

btnLogIn.onclick = logIn;
btnAddNumber.onclick = addNumber;

function logIn() {
  let userName = prompt();
  while (userName !== 'admin') {
    userName = prompt('Username not found!', '');
  }
  alert('Hello admin');
}

function calcTotal(numbersArray) {
  let total = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    total = total + numbersArray[i];
  }
  return total;
}

function print(printString) {
  output.textContent = printString;
}

function addNumber() {
  let number = parseInt(prompt('Enter any number'));
  while (isNaN(number)) {
    number = parseInt(prompt('Enter any number'));
  }
  numbers.push(number);
  print('TOTAL:' + calcTotal(numbers));
}

function find(array, number) {
  let indexOfNumber = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      indexOfNumber = i;
      break;
    }
  }
  return indexOfNumber;
}

function findMax(array) {
  let max = array[0];

  for(let i = 1; i < array.length; i++) {
      max = array[i] > max ? array[i] : max;
  }

  return max;
}

console.log(find([4, 6], 23));
console.log(find([4, 6], 4));
console.log(find([4, 6], 6));
console.log(findMax([1, 2, 56, 12, 34, 97, 9, 95, 23])); // 95
