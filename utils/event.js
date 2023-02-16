import { add, multiply } from "./math";

const eventHandler = () => {

    const addButton = document.getElementById('add');
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const addResult = document.getElementById('result');
    const multiplyButton = document.getElementById('multiply');
    const multiplyResult = document.getElementById('mult-Result');
    const updateDomWithAddedNumbers = () => {
        addResult.innerHTML =
            // parseInt(number1.value, 10)+parseInt(number2.value,10);
            add(number1.value, number2.value);
    }
    const updateDomWithMultipliedNumbers = () => {
        multiplyResult.innerHTML =
            // parseInt(number1.value, 10)*parseInt(number2.value,10);
            multiply(number1.value, number2.value);
            

    }

    addButton.addEventListener('click', updateDomWithAddedNumbers);
    multiplyButton.addEventListener('click', updateDomWithMultipliedNumbers);
   
    
}

export { eventHandler };