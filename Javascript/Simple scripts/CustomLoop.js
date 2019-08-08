//Creates a customized loop function using high order functions
let loop = (value, testFunc, updateFunc, displayFunc) => {
    while(testFunc(value)) {
        displayFunc(value);
        value = updateFunc(value);
    }
}

loop(1, n => n <= 10, n => n + 1, console.log);






