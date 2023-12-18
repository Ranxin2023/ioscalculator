const digits = document.querySelectorAll('.digits');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign')
const equals = document.querySelector('.equals')
const percent = document.querySelector('.percent')
const negative = document.querySelector('.negative')
const clear = document.querySelector('.clear')

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;
// console.log(digits)
for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if (isFirstValue === false) {
            // console.log("atr is" + atr)
            getFirstValue(atr)
        }
        if (isSecondValue === false) {
            getSecondValue(atr)
        }
    });
}

function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
    // console.log("first value is:" + firstValue)

}

function getSecondValue(el) {
    if (firstValue != "" && sign != "") {
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSign() {
    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value')
            isFirstValue = true
        })
    }
}
getSign();

equals.addEventListener('click', () => {
    result.innerHTML = "";
    if (sign === "+") {
        resultValue = firstValue + secondValue;
    } else if (sign === "-") {
        resultValue = firstValue - secondValue;
    } else if (sign === "x") {
        resultValue = firstValue * secondValue;
    } else if (sign === "/") {
        resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";
})

function checkResultLength() {
    resultValueStr = JSON.stringify(resultValue)
    if (resultValueStr.length > 8) {
        resultValue = JSON.parse(resultValueStr)
        result.innerHTML = resultValue.toFixed(5)
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = ""
    if (firstValue != "") {
        resultValue = -firstValue
        firstValue = resultValue
    }
    if (firstValue != "" && secondValue != "" && sign != "") {
        resultValue = -resultValue
    }
    result.innerHTML = resultValue
})

percent.addEventListener('click', () => {
    result.innerHTML = ""
    if (firstValue != "") {
        resultValue = firstValue / 100
        firstValue = resultValue
    }
    if (firstValue != "" && secondValue != "" && sign != "") {
        resultValue = resultValue / 100
    }
    result.innerHTML = resultValue
})

clear.addEventListener('click', () => {
    result.innerHTML = 0
    firstValue = ""
    isFirstValue = false
    secondValue = ""
    isSecondValue = ""
    sign = ""
    resultValue = 0
})