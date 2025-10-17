const result = document.getElementById('result');
const addition = document.getElementById('addition');
const subtraction = document.getElementById('subtraction');

let counter = 0;

addition.addEventListener('click', () => {
  counter++;
  result.textContent = counter;
});

subtraction.addEventListener('click', () => {
  counter--;
  result.textContent = counter;
});
