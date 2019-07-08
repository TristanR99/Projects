//Reverses an array
function reverseArray(array) {
    let newArr = [];
    for(let element of array)
        newArr.unshift(element);
    return newArr;
}

function reverseInPlace(array) {
    for(let x = 0, y = (array.length - 1); x <= Math.floor((array.length)/2) - 1; x++, y--){
       let temp = array[x];
       array[x] = array[y];
       array[y] = temp;  
    }
        
    return array;
}

console.log(reverseInPlace([1,2,3,4,5,6,7,8,9]));


