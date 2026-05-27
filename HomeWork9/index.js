// Task 1
function convert(...values) {

    let result = [];

    for(let i = 0; i < values.length; i++) {
        if (typeof values[i] === "string")
            result.push(Number(values[i]));
        else if (typeof values[i] === "number")
            result.push(String(values[i]));
    }
    return result;
}

console.log(convert("1", "2", "3", 4, 5, 6));

// Task 2
function executeForEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

console.log(executeForEach([1, 2, 3], function(el) {
    console.log(el * 2);
}));

// Task 3
function mapArray(array, callback) {
    let result = [];
    for(let i = 0; i < array.length; i++) {
        let el = array[i];
        result.push(callback(el));
    }
    return result;
}

console.log(mapArray([2, 5, 8], function(el) {
    return Number(el) + 3;
}));