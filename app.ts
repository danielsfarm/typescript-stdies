let userInput: unknown;
let userName: string;

userInput = 5
userInput = 'Max'
if (typeof userInput === 'string') { // To asign unknow we need extra type check
    userName = userInput
}

function generateError(message: string, code: number): never { // Never explicits say this function never return anything
    throw {message: message, errorCode: code}
}

generateError('An Error ocurred!', 500)