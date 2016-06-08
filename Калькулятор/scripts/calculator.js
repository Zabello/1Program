function ts() {
    var myel = document.getElementById('itog');
    var fun = document.getElementById('fun').value;
    var s1 = Number(document.getElementById('s1').value);
    var s2 = Number(document.getElementById('s2').value);
    var msg3 = document.getElementById('msg1');
    var fun1;

    /* if (isNaN(s1) || isNaN(s2)) {
        // alert("Проверте параметры ввода");
    } else {*/
    if (fun == 1) {
        fun1 = +s1 + +s2;
    } else if (fun == 2) {
        fun1 = s1 - s2;
    } else if (fun == 3) {
        if (s2 !== 0) {
            fun1 = s1 / s2;
        } else {
            msg3.innerText = "На ноль делить нельзя";
        }
    } else {
        fun1 = s1 * s2;
    }

    myel.innerText = ("Результат:  " + fun1);
}

function good1() {
    var msg2 = document.getElementById('msg');
    if (A11() < 5) {
        msg2.innerText = 'Введите значение';
    } else if (A22() < 5) {
        msg2.innerText = 'Проверте ввод значения';
    } else {
        msg2.innerText = ''
    }
}

function A11() {
    var s1 = document.getElementById('s1').value;
    var qaz
    if (s1.length == 0) {
        qaz = 4;
    } else {
        qaz = 5;
    }
    return qaz

}

function A22() {
    var s1 = Number(document.getElementById('s1').value);
    var qaz
    if (isNaN(s1)) {
        qaz = 4;
    } else {
        qaz = 5;
    }
    return qaz
}

function good2() {
    var msg3 = document.getElementById('msg1');
    var myel = document.getElementById('itog');
    var fun = document.getElementById('fun').value;

    if (fun == 3) {
        if (AAA() < 5) {
            msg3.innerText = "Введите значение";
        } else if (BBB() < 5) {
            msg3.innerText = "Проверте ввод значения";
        } else if (CCC() < 5) {
            msg3.innerText = "На ноль делить нельзя";
            myel.innerText = "";
        } else {
            msg3.innerText = "";
        }
    } else {
        if (AAA() < 5) {
            msg3.innerText = "Введите значение";
        } else if (BBB() < 5) {
            msg3.innerText = "Проверте ввод значения";
        } else {
            msg3.innerText = ""
        }
    }
}

function AAA() {
    var s2 = document.getElementById('s2').value;
    var qaz
    if (s2.length == 0) {
        qaz = 4;
    } else {
        qaz = 5;
    }
    return qaz
}

function BBB() {
    var s2 = Number(document.getElementById('s2').value);
    var qaz
    if (isNaN(s2)) {
        qaz = 4;
    } else {
        qaz = 5;
    }
    return qaz
}

function CCC() {
    var s2 = Number(document.getElementById('s2').value);
    var ks = document.getElementById('fun').value;
    var qaz
    if (ks == 2) {
        if (s2 == 0) {
            qaz = 4;
        } else {
            qaz = 5;
        }
    }
    return qaz
}