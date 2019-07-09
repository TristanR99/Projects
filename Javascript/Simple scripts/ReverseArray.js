//Reverses an array
exports.reverseArray = function reverseArray(array) {
    let newArr = [];
    for(let element of array)
        newArr.unshift(element);
    return newArr;
}

exports.reverseInPlace = function reverseInPlace(array) {
    for(let x = 0, y = (array.length - 1); x <= Math.floor((array.length)/2) - 1; x++, y--){
       let temp = array[x];
       array[x] = array[y];
       array[y] = temp;  
    }
        
    return array;
}


