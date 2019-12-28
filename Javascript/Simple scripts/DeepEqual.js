function deepEqual(obj1, obj2) {
    if (Object.keys(obj1).length != Object.keys(obj2).length)
        return false;

    let arr1 = Object.keys(obj1);
    let arr2 = Object.keys(obj2);
    let index = 0;

    while (true) {
        if ((typeof arr1[index] == "object" && arr1[index] != null) && (typeof arr2[index] == "object" && arr2[index] != null))
            deepEqual(arr1[index], arr2[index]);
    }
}

