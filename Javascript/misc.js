function test([...rest, a, b, c, d]){
    return (a + b + c + d);
}

arr = [1,2,3,4,5];

console.log(test(arr));


