let userInput: unknown;
let userName: string;

userInput = 5
userInput = 'Max'
if (typeof userInput === 'string') { // To asign unknow we need extra type check
    userName = userInput
}