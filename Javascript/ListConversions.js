//Contains simple tools for lists
const reverse = require('./ReverseArray');

//Takes an array and converts it to a list
function arrayToList(array) {
    array = reverse.reverseInPlace(array);


    let list = {
        value: array.shift(),
        rest: null
    }

    for (let element of array)
        list = {
            value: element,
            rest: list
        }

    return list;
}

//Takes a list and returns an array
function listToArray(list) {
    let array = [];
    for (let element = list; element; element = element.rest)
        array.push(element.value);

    return array;
}

//Takes an element and prepends to to the front of a list
function prepend(element, list) {
    element.rest = list;
}

//Returns the nth element of a list
function nth(index, list) {
    for (let element = list, idx = 0; idx <= index; element = element.rest, idx++)
        if (idx == index - 1) return element;
        
    return undefined;
}

//Same as the previous function but done recursively
function nthRecursive(index, list) {
    if(index == 1) return list;
    else return nthRecursive(index - 1, list.rest);
}





