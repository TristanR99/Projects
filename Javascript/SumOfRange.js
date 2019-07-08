//  Computes the sum of a range
function range(start, end) {
    //Returns an array containing elements from start to end
    let arr = [];
    if (start >= end) {
        for (let upper = start; upper >= end; upper--)
        arr.push(upper);
    }
    else {
        for (let lower = start; lower <= end; lower++)
            arr.push(lower);
    }
    return arr;
}

function sum(range) {
    //Computes the sum of a range
    let sum = 0;
    for (let element of range)
        sum += element;
    return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55