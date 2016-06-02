function validffForm(f) {
    // Если введено число, то скрываем предупреждение
    if (isDigit(f.value)) document.getElementById("msg").style.display = "none";
    // В противном случае отображаем предупреждение
    else document.getElementById("msg").style.display = "inline";
}
// Функция по проверке, число введено или нет
function isDigit(data) {
    var numStr = "0123456789";
    var k = 0;
    for (i = 0; i < data.length; i++) {
        thisChar = data.substring(i, i + 1);
        if (numStr.indexOf(thisChar) != -1) k++;
    }
    if (k == data.length) return 1;
    else return 0;
}

function validForm(f) {
    // Если введено число, то скрываем предупреждение
    if (isDigit(f.value)) document.getElementById("msgq").style.display = "none";
    // В противном случае отображаем предупреждение
    else document.getElementById("msgq").style.display = "inline";
}
// Функция по проверке, число введено или нет
function isDigit(data) {
    var numStr = "0123456789";
    var k = 0;
    for (i = 0; i < data.length; i++) {
        thisChar = data.substring(i, i + 1);
        if (numStr.indexOf(thisChar) != -1) k++;
    }
    if (k == data.length) return 1;
    else return 0;
}



function ts() {
    var myel = document.getElementById('itog');
    var fun = document.getElementById('fun').value;
    var s1 = Number(document.getElementById('s1').value);
    var s2 = Number(document.getElementById('s2').value);
    var fun1;

    if (isNaN(s1) || isNaN(s2)) {
        // alert("Проверте параметры ввода");
    } else {
        if (fun == 1) {
            fun1 = +s1 + +s2;
        } else if (fun == 2) {
            fun1 = s1 - s2;
        } else if (fun == 3) {
            if (s2 !== 0) {
                fun1 = s1 / s2;
            } else {
                // alert("Делить на ноль нельзя");
            }
        } else {
            fun1 = s1 * s2;
        }

        myel.innerText = ("Результат:  " + fun1);
    }
}