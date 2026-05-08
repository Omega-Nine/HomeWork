let play = confirm("Вы хотите сыграть в игру?");

if (!play) {

    alert("Вы не стали миллиардером, но можете им стать");

} else {

    let totalPrize = 0;
    let maxPrize = 100;
    let maxNumber = 5;

    let continueGame = true;

    while (continueGame) {

        let randomNumber =
            Math.floor(Math.random() * (maxNumber + 1));

        let attempts = 3;

        let currentPrize = maxPrize;

        let won = false;


        // цикл попыток
        while (attempts > 0) {

            let userNumber = Number(
                prompt(`Введите число от 0 до ${maxNumber}

Попыток осталось: ${attempts}

Ваш текущий выигрыш: ${totalPrize}$

Возможный выигрыш: ${currentPrize}$`)
            );


            // победа
            if (userNumber === randomNumber) {

                totalPrize += currentPrize;

                alert(
`Поздравляем!
Вы выиграли ${currentPrize}$

Общий выигрыш: ${totalPrize}$`
                );

                won = true;

                break;
            }


            attempts--;

            currentPrize =
                Math.floor(currentPrize / 2);
        }


        // после цикла попыток
        if (won) {

            continueGame = confirm(
`Поздравляем!

Ваш приз: ${totalPrize}$

Хотите продолжить игру?`
            );

            if (continueGame) {

                maxNumber += 5;

                maxPrize *= 2;
            }

        } else {

            alert(
`Спасибо за участие!

Ваш выигрыш: ${totalPrize}$`
            );

            continueGame =
                confirm("Хотите сыграть еще раз?");


            if (continueGame) {

                totalPrize = 0;

                maxPrize = 100;

                maxNumber = 5;
            }
        }
    }
}