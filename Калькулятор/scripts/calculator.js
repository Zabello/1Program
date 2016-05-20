function ts() {
    var myel = document.getElementById('itog');
    var fun = document.getElementById('fun').value;
    var s1 = Number(document.getElementById('s1').value);
    var s2 = Number(document.getElementById('s2').value);

    if (isNaN(s1) || isNaN(s2)) {
        alert("Проверте параметры ввода");
    } else {
        if (fun == 1) {
            fun = +s1 + +s2;
        } else if (fun == 2) {
            fun = s1 - s2;
        } else if (fun == 3) {
            if (s2 !== 0) {
                fun = s1 / s2;
            } else {
                alert("Делить на ноль нельзя");
            }
        } else {
            fun = s1 * s2;
        }

        myel.innerText = fun;
    }
}
// Вопросы:
// 1. Number- какое имеет значение?
// 2. Можно ли избавится от результата "3" после деления на "0"?
// 3. Значение "!==", какую функцию выполняет "!"?