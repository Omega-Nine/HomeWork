function isBigger(a, b) {
    return a > b;
}


function countPoints(results) {
    let points = 0;
    for(let i = 0; i < results.length; i++) {
        let [x, y] = results[i].split(":");

        x = Number(x);
        y = Number(y);

        if(isBigger(x, y)) {
            points = points + 3;
        } else if(x === y) {
            points = points + 1;

        }
    }
    return points;
}

console.log(countPoints(["1:0", "2:0", "3:0", "4:0", "2:2", "3:1", "4:1", "3:2", "0:2", "1:3"]));