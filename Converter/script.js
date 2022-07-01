// fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(function (response) {
//     return response.json();
// }).then(function (data) {
//     console.log(data);
// })

const baseValuteSelect =  document.querySelector('#base-valute-select');
const rates = {};

const elementValueUSD = document.querySelector('[data-value="USD"]');
const elementValueEUR = document.querySelector('[data-value="EUR"]');
const elementValueGBP = document.querySelector('[data-value="GBP"]');
const elementValueJPY = document.querySelector('[data-value="JPY"]');
const elementValueCNY = document.querySelector('[data-value="CNY"]');
const elementValuePLN = document.querySelector('[data-value="PLN"]');
const elementValueBYN = document.querySelector('[data-value="BYN"]');
const elementValueUAH = document.querySelector('[data-value="UAH"]');
const elementValueRUB = document.querySelector('[data-value="RUB"]');

const elementPreviousUSD = document.querySelector('[data-previous="USD"]');
const elementPreviousEUR = document.querySelector('[data-previous="EUR"]');
const elementPreviousGBP = document.querySelector('[data-previous="GBP"]');
const elementPreviousJPY = document.querySelector('[data-previous="JPY"]');
const elementPreviousCNY = document.querySelector('[data-previous="CNY"]');
const elementPreviousPLN = document.querySelector('[data-previous="PLN"]');
const elementPreviousBYN = document.querySelector('[data-previous="BYN"]');
const elementPreviousUAH = document.querySelector('[data-previous="UAH"]');
const elementPreviousRUB = document.querySelector('[data-previous="RUB"]');

const inputNumber = document.querySelector('#input-number');
const outputNumber1 = document.querySelector('#output-number1');
const outputNumber2 = document.querySelector('#output-number2');
const outputNumber3 = document.querySelector('#output-number3');

const inputSelect = document.querySelector('#input-select');
const outputSelect1 = document.querySelector('#output-select1');
const outputSelect2 = document.querySelector('#output-select2');
const outputSelect3 = document.querySelector('#output-select3');

getCurrencies();

baseValuteSelect.oninput = showRates;

inputNumber.oninput = convertValue;
inputSelect.oninput = convertValue;
outputSelect1.oninput = convertValue;
outputSelect2.oninput = convertValue;
outputSelect3.oninput = convertValue;


async function getCurrencies() {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const promiseObject = await response.json();
    const currenciesResult = await promiseObject;

    rates.USD = currenciesResult.Valute.USD;
    rates.EUR = currenciesResult.Valute.EUR;
    rates.GBP = currenciesResult.Valute.GBP;
    rates.JPY = currenciesResult.Valute.JPY;
    rates.CNY = currenciesResult.Valute.CNY;
    rates.PLN = currenciesResult.Valute.PLN;
    rates.BYN = currenciesResult.Valute.BYN;
    rates.UAH = currenciesResult.Valute.UAH;
}

function showRates() {   
    let baseValuteValue;
    switch(baseValuteSelect.value) {
        case 'USD' : baseValuteValue = rates.USD.Value / rates.USD.Nominal; break;
        case 'EUR' : baseValuteValue = rates.EUR.Value / rates.EUR.Nominal; break;
        case 'GBP' : baseValuteValue = rates.GBP.Value / rates.GBP.Nominal; break;
        case 'JPY' : baseValuteValue = rates.JPY.Value / rates.JPY.Nominal; break;
        case 'CNY' : baseValuteValue = rates.CNY.Value / rates.CNY.Nominal; break;
        case 'PLN' : baseValuteValue = rates.PLN.Value / rates.PLN.Nominal; break;
        case 'BYN' : baseValuteValue = rates.BYN.Value / rates.BYN.Nominal; break;
        case 'UAH' : baseValuteValue = rates.UAH.Value / rates.UAH.Nominal; break;
        case 'RUB' : baseValuteValue = 1; break;
    }

    elementValueUSD.textContent = (baseValuteValue / rates.USD.Value * rates.USD.Nominal).toFixed(4);
    elementValueEUR.textContent = (baseValuteValue / rates.EUR.Value * rates.EUR.Nominal).toFixed(4);
    elementValueGBP.textContent = (baseValuteValue / rates.GBP.Value * rates.GBP.Nominal).toFixed(4);
    elementValueJPY.textContent = (baseValuteValue / rates.JPY.Value * rates.JPY.Nominal).toFixed(4);
    elementValueCNY.textContent = (baseValuteValue / rates.CNY.Value * rates.CNY.Nominal).toFixed(4);
    elementValuePLN.textContent = (baseValuteValue / rates.PLN.Value * rates.PLN.Nominal).toFixed(4);
    elementValueBYN.textContent = (baseValuteValue / rates.BYN.Value * rates.BYN.Nominal).toFixed(4);
    elementValueUAH.textContent = (baseValuteValue / rates.UAH.Value * rates.UAH.Nominal).toFixed(4);
    elementValueRUB.textContent = baseValuteValue.toFixed(3);

    // rates.USD.Value > rates.USD.Previous ? elementValueUSD.classList.add('to-expensive') : elementValueUSD.classList.add('to-cheap');
    // rates.EUR.Value > rates.EUR.Previous ? elementValueEUR.classList.add('to-expensive') : elementValueEUR.classList.add('to-cheap');
    // rates.GBP.Value > rates.GBP.Previous ? elementValueGBP.classList.add('to-expensive') : elementValueGBP.classList.add('to-cheap');
    // rates.JPY.Value > rates.JPY.Previous ? elementValueJPY.classList.add('to-expensive') : elementValueJPY.classList.add('to-cheap');
    // rates.CNY.Value > rates.CNY.Previous ? elementValueCNY.classList.add('to-expensive') : elementValueCNY.classList.add('to-cheap');
    // rates.PLN.Value > rates.PLN.Previous ? elementValuePLN.classList.add('to-expensive') : elementValuePLN.classList.add('to-cheap');
    // rates.BYN.Value > rates.BYN.Previous ? elementValueBYN.classList.add('to-expensive') : elementValueBYN.classList.add('to-cheap');
    // rates.UAH.Value > rates.UAH.Previous ? elementValueUAH.classList.add('to-expensive') : elementValueUAH.classList.add('to-cheap');
}

function convertValue() {
    let inputValuteValue;
    switch(inputSelect.value) {
        case 'USD' : inputValuteValue = rates.USD.Value / rates.USD.Nominal; break;
        case 'EUR' : inputValuteValue = rates.EUR.Value / rates.EUR.Nominal; break;
        case 'GBP' : inputValuteValue = rates.GBP.Value / rates.GBP.Nominal; break;
        case 'JPY' : inputValuteValue = rates.JPY.Value / rates.JPY.Nominal; break;
        case 'CNY' : inputValuteValue = rates.CNY.Value / rates.CNY.Nominal; break;
        case 'PLN' : inputValuteValue = rates.PLN.Value / rates.PLN.Nominal; break;
        case 'BYN' : inputValuteValue = rates.BYN.Value / rates.BYN.Nominal; break;
        case 'UAH' : inputValuteValue = rates.UAH.Value / rates.UAH.Nominal; break;
        case 'RUB' : inputValuteValue = 1; break;
    }

    let outputValuteValue1;
    switch(outputSelect1.value) {
        case 'USD' : outputValuteValue1 = rates.USD.Value / rates.USD.Nominal; break;
        case 'EUR' : outputValuteValue1 = rates.EUR.Value / rates.EUR.Nominal; break;
        case 'GBP' : outputValuteValue1 = rates.GBP.Value / rates.GBP.Nominal; break;
        case 'JPY' : outputValuteValue1 = rates.JPY.Value / rates.JPY.Nominal; break;
        case 'CNY' : outputValuteValue1 = rates.CNY.Value / rates.CNY.Nominal; break;
        case 'PLN' : outputValuteValue1 = rates.PLN.Value / rates.PLN.Nominal; break;
        case 'BYN' : outputValuteValue1 = rates.BYN.Value / rates.BYN.Nominal; break;
        case 'UAH' : outputValuteValue1 = rates.UAH.Value / rates.UAH.Nominal; break;
        case 'RUB' : outputValuteValue1 = 1; break;
    }

    let outputValuteValue2;
    switch(outputSelect2.value) {
        case 'USD' : outputValuteValue2 = rates.USD.Value / rates.USD.Nominal; break;
        case 'EUR' : outputValuteValue2 = rates.EUR.Value / rates.EUR.Nominal; break;
        case 'GBP' : outputValuteValue2 = rates.GBP.Value / rates.GBP.Nominal; break;
        case 'JPY' : outputValuteValue2 = rates.JPY.Value / rates.JPY.Nominal; break;
        case 'CNY' : outputValuteValue2 = rates.CNY.Value / rates.CNY.Nominal; break;
        case 'PLN' : outputValuteValue2 = rates.PLN.Value / rates.PLN.Nominal; break;
        case 'BYN' : outputValuteValue2 = rates.BYN.Value / rates.BYN.Nominal; break;
        case 'UAH' : outputValuteValue2 = rates.UAH.Value / rates.UAH.Nominal; break;
        case 'RUB' : outputValuteValue2 = 1; break;
    }

    let outputValuteValue3;
    switch(outputSelect3.value) {
        case 'USD' : outputValuteValue3 = rates.USD.Value / rates.USD.Nominal; break;
        case 'EUR' : outputValuteValue3 = rates.EUR.Value / rates.EUR.Nominal; break;
        case 'GBP' : outputValuteValue3 = rates.GBP.Value / rates.GBP.Nominal; break;
        case 'JPY' : outputValuteValue3 = rates.JPY.Value / rates.JPY.Nominal; break;
        case 'CNY' : outputValuteValue3 = rates.CNY.Value / rates.CNY.Nominal; break;
        case 'PLN' : outputValuteValue3 = rates.PLN.Value / rates.PLN.Nominal; break;
        case 'BYN' : outputValuteValue3 = rates.BYN.Value / rates.BYN.Nominal; break;
        case 'UAH' : outputValuteValue3 = rates.UAH.Value / rates.UAH.Nominal; break;
        case 'RUB' : outputValuteValue3 = 1; break;
    }

    outputNumber1.value = (parseFloat(inputNumber.value) * inputValuteValue / outputValuteValue1).toFixed(4);
    outputNumber2.value = (parseFloat(inputNumber.value) * inputValuteValue / outputValuteValue2).toFixed(4);
    outputNumber3.value = (parseFloat(inputNumber.value) * inputValuteValue / outputValuteValue3).toFixed(4);

    
    // outputNumber1.value = (parseFloat(inputNumber.value) * inputValuteValue / rates[outputSelect1.value].Value).toFixed(4);
    // outputNumber2.value = (parseFloat(inputNumber.value) * inputValuteValue / rates[outputSelect2.value].Value).toFixed(4);
    // outputNumber3.value = (parseFloat(inputNumber.value) * inputValuteValue / rates[outputSelect3.value].Value).toFixed(4);
}