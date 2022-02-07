function add(n1: number, n2: number): number { // Expliciting the return type of the function
    return n1 + n2
}

function printResult(num: number) {
    console.log('Result: ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2
    // Use void as a retruned value the function dont expect to return any value.
}

printResult(add(5, 20))

let combineValue1: Function; // Type function
let combineValue2: () => number; // Type function and returned type
let combineValue3: (a: number, b: number) => number; // Type function, params and returned type

combineValue1 = add
// combineValue1 = printResult

console.log(combineValue1(8, 8))

addAndHandle(10, 20, (num) => {
    console.log(num)
    return;
})