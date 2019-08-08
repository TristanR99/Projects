//IMplementing my own version of the every() function provided with arrays
//One version uses a loop and the other uses the some() method

//Loop version
let everyL = (array, testFunc) => {
    let bool = true;
    array.forEach(element => {
        if (!testFunc(element)) bool = false;
    });
    return bool;
}

//some() version
let everyS = (array, testFunc) => {
    return !array.some( x => !testFunc(x));
}

console.log(everyS([1, 3, 5], n => n < 10));
// → true
console.log(everyL([2, 4, 16], n => n < 10));
// → false
console.log(everyS([], n => n < 10));
// → true