function launchGameOne() {
    let season = "";
    let month = 0;
    while (true) {
        month = prompt("Введите номер месяца (от 1 до 12)");
        
        // проверяем, что пользователь нажал на кнопку "отмена"
        if (month === null) {
            return;
        }
        
        month = parseInt(month);  // переводим в int
        
        if (month >= 1 && month <= 12) {
            break;
        } else {
            alert("Неверный номер месяца");
        }
    }

    if (month >= 3 && month <=5) {
        season = "весна";
    } else if (month >= 6 && month <=8) {
        season = "лето";
    } else if (month >= 9 && month <= 11) {
        season = "осень";
    } else {
        season = "зима";
    }
    msg = `Вы ввели месяц ${month}, это ${season}`;        
    console.log(msg);  // выводим в консоль
    alert(msg);  // выводим на экран
}


let months = {
    1: ["январь", 1],
    2: ["февраль", 1],
    3: ["март", 2],
    4: ["апрель", 2],
    5: ["май", 2],
    6: ["июнь", 3],
    7: ["июль", 3],
    8: ["август", 3],
    9: ["сентябрь", 4],
    10: ["октябрь", 4],
    11: ["ноябрь", 4],
    12: ["декабрь", 1]
};

let seasons = {
    1: "зима",
    2: "весна",
    3: "лето",
    4: "осень"
};

// Game 1
function launchGameOne_2() {    
    let month = "";
    while (true) {
        month = prompt("Введите номер месяца (от 1 до 12)");
        
        // проверяем, что пользователь нажал на кнопку "отмена"
        if (month === null) {
            return;
        }
        
        month = month.trim();  // убираем начальные и конечные пробелы
        if (month in months) {
            break;
        } else if (month == "") {
            continue;
        } else {
            alert("Неверный номер месяца");
        }        
    }

    let month_name = months[month][0];
    let season_name= seasons[months[month][1]];
    msg = `Вы ввели месяц ${month} (${month_name}), это ${season_name}`;        
    console.log(msg);  // выводим в консоль
    alert(msg);  // выводим на экран
}


function getRandomIndex(n) {
    return Math.floor(Math.random() * n) + 1;
}

// Game 2
function launchGameTwo() {
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    let newArr = arr.sort(() => Math.random() - 0.5);
    let arrLength = newArr.length;

    let firstWordIndex = getRandomIndex(arrLength);
    let secondWordIndex;
    do {
        secondWordIndex = getRandomIndex(arrLength);
    } while (secondWordIndex === firstWordIndex);

    let firstElement = newArr[firstWordIndex - 1].toLowerCase();
    let lastElement = newArr[secondWordIndex - 1].toLowerCase();

    alert(`Запомните список:\n${newArr.join(", ")}`);
    
    let userFirstElement = "";
    do {
        userFirstElement = prompt(`Введите слово ${firstWordIndex} из списка`);
        if (userFirstElement === null) { return; }
    } while (userFirstElement === "")
    userFirstElement = userFirstElement.trim().toLowerCase();

    let userLastElement = "";
    do {
        userLastElement = prompt(`Введите слово ${secondWordIndex} из списка`);
        if (userLastElement === null) { return; }
    } while (userLastElement === "")
    userLastElement = userLastElement.trim().toLowerCase();

    if ((userFirstElement === firstElement) && (userLastElement === lastElement)) {
        alert("Поздравляю, Вы угадали!!!");
    } else if ((userFirstElement === firstElement) || (userLastElement === lastElement)) {
        alert("Вы были близки к победе!");
    } else {
        alert("К сожалению, вы не угадали");    
    }
}


// Game 3
function launchGameThree() {
    const questions = [
        {
            question: "Зимой и летом одним цветом",
            answer: ["ель", "елка", "ёлка"],
            hints: ["она зеленая", "это растение"],
        },
        {
            question: "Сто одежек и все без застежек",
            answer: ["лук"],
            hints: ["это он", "это растение"],
        },
        {
            question: "Не лает, не кусается, и точно так же называется",
            answer: ["@"],
            hints: ["это символ", "встречается в адресе электронной почты"],
        },
        {
            question: "Оно всегда перед нами, но видеть его мы не можем. Что это?",
            answer: ["будущее"],
            hints: ["это абстрактное понятие", "это то, чего еще нет"],
        },
        {
            question: "Какой конь не ест овса?",
            answer: ["шахматный"],
            hints: ["этот конь не настоящий", "он не ходит по прямой"],
        },
    ]

    function checkAnswer(question, answer_) {
            for (let i in question.answer) {
            if (question.answer[i].toLowerCase() === answer_.toLowerCase()) return true;
        }
        return false;
    }
    
    function getHint(question, hintIndex) {
        return question.hints[hintIndex];
    }
        
    let questionIndex = Math.floor(Math.random() * questions.length);
 
    for (let counter = 2; counter >= 0; counter--) {
        let userAnswer = prompt(questions[questionIndex].question);
        if (checkAnswer(questions[questionIndex], userAnswer)) return alert("Верно");
        else if (counter > 0) {
            let hint = getHint(questions[questionIndex], counter - 1);
            alert(`Неверно.\nУ Вас еще ${counter} попыток.\nПодсказка: ${hint}`);
        } else return alert("Вы не угадали");            
    }
}