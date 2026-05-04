let billInput = prompt("Введите сумму счета:");
let tipInput = prompt("Введите процент чаевых:");

let bill = Number(billInput);
let tipPercent = Number(tipInput);

if (
    isNaN(bill) ||
    isNaN(tipPercent) ||
    bill <= 0 ||
    tipPercent < 0 ||
    tipPercent > 100
) {
    alert("Неверные данные ввода.");
} else {
    let tipAmount = bill * tipPercent / 100;
    let total = bill + tipAmount;

    tipAmount = tipAmount.toFixed(2);
    total = total.toFixed(2);

    alert(`Номер чека: ${bill}
        Чаевые: ${tipPercent}%
        Сумма чаевых: ${tipAmount}
        Общая сумма: ${total}`);
        console.log(total);
}





