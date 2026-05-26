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