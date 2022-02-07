console.log("Your code goes here...");

function add1(n1: number, n2: number, showResult: boolean, phrase: string) {

    let result = n1 + n2

    if (showResult) {
        console.log(phrase + result);
    } else {
        return n1 + n2;
    }
}

let number1 = 5;
const number2 = 2.8;
const isPrintResult = true;
const resultPhrase = 'The result is: '

add1(number1, number2, isPrintResult, resultPhrase);
