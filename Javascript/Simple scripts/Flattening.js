//Uses a combination of high order functions to spread a 2d array into a single array
let arrays = [[1, 2, 3], [4, 5], [6, 7, 8], [9, 10]];
let result = [];
arrays.forEach(s => s.forEach(l => result.push(l)));

console.log(result);
