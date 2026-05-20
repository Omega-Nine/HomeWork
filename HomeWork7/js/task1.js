const login = prompt("Введите логин:");

if (login === null || login.trim() === "") {
  alert("Отменено");
}

else if (login.length < 4) {
    alert("Я не знаю ни одного пользователя с длиной имени меньше 4 символов");
}

else if (login === "Администратор" || login === "Пользователь") {

    const password = prompt("Введите пароль:");

    if (password === null || password.trim() === "") {
        alert("Отменено");
    }

    else if (login === "Администратор" && password === "RootPass") {
        showGreeting(login);
    }

    else if (login === "Пользователь" && password === "UserPass") {
        showGreeting(login);
    }

    else {
        alert("Неверный пароль");
    }
}

else {
    alert("Я Вас не знаю");
}

function showGreeting(userRoll) {
    const currentHour = new Date().getHours();

    const timeOfDay = currentHour < 20 ? "Доброе утро" : "Добрый вечер";
    alert(`${timeOfDay}, уважаемый ${userRoll}!`);
}

