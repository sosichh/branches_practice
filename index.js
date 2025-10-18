const additionButton = document.querySelector('#addition');
const subtracitonButton = document.querySelector('#subtraction');
const result = document.querySelector('#result');

const addOne = () =>{
    additionButton.disabled = true;
    result.innerHTML++;
    additionButton.disabled = false;
}

const subtractOne = () =>{
    subtracitonButton.disabled = true;
    result.innerHTML--;
    subtracitonButton.disabled = false;
}

additionButton.addEventListener('click', addOne);
subtracitonButton.addEventListener('click', subtractOne);
