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
//function mapArray(array, callback) {
//    let result = [];
//    for(let i = 0; i < array.length; i++) {
//        let el = array[i];
//        result.push(callback(el));
//    }
//    return result;
//}

//console.log(mapArray([2, "5", 8], function(el) {
//    return Number(el) + 3;
//}));

console.log(
    [2, "5", 8].map(function(el) {
        return Number(el) + 3;
    })
);

// Task 4
//function filterArray(array, callback) {
//    let result = [];
//    for(let i = 0; i < array.length; i++) {
//        let el = array[i];
//        if(callback(el)) {
//            result.push(el);
//        }
//    }
//    return result;
//}

//console.log(filterArray([2, 5, 8], function(el) {
//    return el % 2 === 0;
//}));

console.log(
    [2, 5, 8].filter(function(el) {
        return el % 2 === 0;
    })
);

// Task 5
function containsValue(array, value) {
    for(let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }    
    return false;   
    }
}

console.log(containsValue([2, 5, 8], 2));
console.log(containsValue([2, 5, 8], 4));

// Task 6
function flipOver(str) {
    let result = "";
    for(let i = str.length - 1; i >=0; i--) {
        result = result + str[i];
    }
    return result;

}

console.log(flipOver('hey world'));

//Task 7

function makeListFromRange(array) {
    let result = [];

    let start = array[0];
    let end = array[1];

    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    return result;
}

console.log(makeListFromRange([2, 7]));

//Task8

function getArrayOfKeys(fruits, key) {
    let result = [];
    
    for(let i = 0; i < fruits.length; i++) {
        result.push(fruits[i][key])
    }

    return result;
}

console.log(
    getArrayOfKeys(
        [
            { name: "apple" },
            { name: "pineapple" }
        ],
        "name"
    )
);

//Task9


