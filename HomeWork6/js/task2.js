let word = prompt("Введите слово")

if (word === null || word.trim() === "") {
    alert("Недопустимое значение");
} else {

    let length = word.length;

    if (length % 2 !== 0) {
        let middleIndex = Math.floor(length / 2);

        let result = word[middleIndex];

        alert(result);
    } else {
        let middleIndex1 = length / 2;

        let result = word.slice(middleIndex1 - 1, middleIndex1 + 1);
        alert(result);
    }
}