function positiveSum(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > 0) {
            sum = sum + numbers[i];
        }
        }
    return sum;
}

console.log(positiveSum([1, -4, 7, 12]));