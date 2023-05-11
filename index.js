const displayEl = document.querySelector('.display');
const clearEl = document.querySelector('.clearBtn');
const operatorBtn = document.querySelectorAll('.operator-button');
const equalEl = document.querySelector('.equalBtn');
const digitBtn = document.querySelectorAll('.digit');
const deleteBtn = document.querySelector('.deleteBtn')
const percentageBtn = document.querySelector('.percentage')
let total = '';
// Digit addEventListner
 const digit = digitBtn.forEach((item) => {
  item.addEventListener('click', () =>{
  digit_pressed(item.textContent); 
  })
})

// Disply on the DOM & digit pressed function
function digit_pressed(digit) {
  displayEl.innerHTML +=`${digit}`;
  total = displayEl.innerHTML;
}

let calc;
operatorBtn.forEach((operator) => {
  operator.addEventListener('click', () =>{
   calc = digit_pressed(operator.textContent);
  })
})
// delete button
deleteBtn.addEventListener('click', () => {
  displayEl.innerHTML = displayEl.innerHTML.substring(0, displayEl.innerHTML.length - 1)
    displayEl.innerHTML;
})
// clear function
function clear() {
  displayEl.innerHTML =''
}

clearEl.addEventListener('click', () => {
  clear()
})
// calculate function
equalEl.addEventListener('click', function() {
  let calculate = eval(total)
    displayEl.innerHTML =`${calculate}`;
  console.log(calculate)
 
})
