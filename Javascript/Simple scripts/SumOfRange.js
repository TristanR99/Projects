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