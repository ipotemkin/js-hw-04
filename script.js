
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
