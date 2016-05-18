function formatNumber(myNumber) {
    if (myNumber == 0) {
        alert('В делителе ноль. Недопустимое значение');
    }
    return myNumber;
}

/*function format(myNumber) {
    if (myNumber == 'NaN') {
        alert('Проверте ввод значений');
    }
    return mygNumber;
}*/

function ts() {
    var myel = document.getElementById('itog')
    var fun = document.getElementById('fun').value
    var s1 = document.getElementById('s1').value
    var s2 = document.getElementById('s2').value
    if (fun == 1) {
        fun = +s1 + +s2
    } else if (fun == 2) {
        fun = s1 - s2;
    } else if (fun == 3) {
        fun = s1 / formatNumber(s2);
    } else {
        fun = s1 * s2
    }
    myel.innerText = fun;
}