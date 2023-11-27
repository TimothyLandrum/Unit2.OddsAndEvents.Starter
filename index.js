


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = document.querySelector('form');
    const inputSelector = 'input[name="number"]';
    const numberInput = form.querySelector(inputSelector);
    const numberBankId = '#numberBank';
    const outputElement = 'output';
    const numberBankOutput = document.querySelector(numberBankId + ' ' + outputElement);


    const inputValue = numberInput.value;
    const parsedNumber = parseInt(inputValue, 10);

    // Convert the number to a string
    const numberAsString = parsedNumber.toString();

    // check to make sure a number is entered
    const notANumberString = 'NaN';
    if(numberAsString !== notANumberString) {
        const contentExists = numberBankOutput.textContent;
        if (contentExists) {
            const separator = ', ';
            numberBankOutput.textContent += separator + parsedNumber;
        } else {
            numberBankOutput.textContent = parsedNumber;
        }
    }
    numberInput.value = '';
});

//Button: Sort 1
const sortOneButton = document.querySelector('#sortOne');
sortOneButton.addEventListener('click', function() {
    const numberBankOutput = document.querySelector('#numberBank output');
    
    const numberBankContent = numberBankOutput.textContent;
    const numberSeparator = ', ';
    let numbersArray = numberBankContent.split(numberSeparator).map(Number);
    
    if (numbersArray.length > 0) {
        const firstNumber = numbersArray[0];
        if (!isNaN(firstNumber)) { 
            let numberToSort = numbersArray.shift(); 
            sortNumber(numberToSort);
            
            numberBankOutput.textContent = numbersArray.join(numberSeparator);
        }
    }
});

//Button: Sort All
const sortAllButton = document.querySelector('#sortAll');
sortAllButton.addEventListener('click', function() {
    const numberBankOutput = document.querySelector('#numberBank output');    
    let numbersToSort = numberBankOutput.textContent.split(', ').map(Number);
    numbersToSort.forEach(function(number) {
        sortNumber(number);
    });

    numberBankOutput.textContent = '';
});

// Sort between odds and evens
function sortNumber(numberToSort) {
    const oddsId = '#odds';
    const evensId = '#evens';
    const oddsOutput = document.querySelector(oddsId + ' output');
    const evensOutput = document.querySelector(evensId + ' output');
    
    const remainder = numberToSort % 2;
    const isEven = remainder === 0;
    
    if (isEven) { 
        const evensContentExists = evensOutput.textContent;
        const separator = evensContentExists ? ', ' : '';
        evensOutput.textContent += separator + numberToSort;
    } else {
        const oddsContentExists = oddsOutput.textContent;
        const separator = oddsContentExists ? ', ' : '';
        oddsOutput.textContent += separator + numberToSort;
    }
}
