function ts() {
    var isvalid = true;
    var isvalid2 = true;
    var el1 = document.getElementById('b1');
    /* проверяем валидность поля один. Передаем в функцию 
    проверки элемент один */
    isvalid = ULTI(el1);
    var el2 = document.getElementById('b2');
    isvalid2 = ULTI(el2);
    if (isvalid == false) {
        return;
    }
    if (isvalid2 == false) {
        return;
    }
    var myel = document.getElementById('itog');
    var ks = document.getElementById('znak').value;
    var b1 = Number(el1.value);
    var b2 = Number(el2.value);
    var bnwv2 = document.getElementById('bnw2');
    var ks1;
    /*if (isNaN(b1) || isNaN(b2)) {
        myel.innerText = '';
    } else { временно закомментил т.к. хотел чтобы этот кусок 
        выполнялся отдельной функцией через onchange*/
    if (ks == 1) {
        ks1 = b1 * b2;
    } else if (ks == 2) {
        if (b2 !== 0) {
            ks1 = b1 / b2
        } else {
            return;
        }
    } else if (ks == 3) {
        ks1 = b1 + b2
    } else {
        ks1 = b1 - b2;
    }



    myel.innerText = ks1;
}

function validate() {
    var isvalid = true;
    var isvalid2 = true;
    var el1 = document.getElementById('b1');
    isvalid = ULTI2(el1);
    var el2 = document.getElementById('b2');
    isvalid2 = ULTI2(el2);
}

function ULTI(el) {
    /*получаем элемент span привязанный к эл-ту инпута. 
    к id инпута прибавляем -s и получаем id соответствующего 
    спана (выбрано по конвенции)*/
    var bnwv2 = document.getElementById(el.id + '-s');
    var myel = document.getElementById('itog');
    var ks = document.getElementById('znak').value;
    var b2 = el;
    var isvalid = false;
    var errorMessage = '';
    var Bukv = PNB(el);
    var Del = PND(el);
    var Nol = PNN(el);
    if (Bukv) {
        errorMessage = ' вводите буквы';
    } else
    if (Del) {
        errorMessage = ' пустая ячейка';
    } else if (Nol && ks == 2) {
        errorMessage = ' делить на ноль нельзя';
    } else {
        bnwv2.innerText = '';
        // b2.style.borderColor = 'black';
        // b2.style.borderWidth = '1px';
        isvalid = true;
    }
    if (!isvalid) {
        bnwv2.innerText = errorMessage;
        b2.style.borderColor = 'red';
        myel.innerText = '';
    }
    return isvalid;

}

function PND(el) {
    var b2 = el.value;
    var qaz;
    if (b2.length == 0) {
        qaz = true;
    } else {
        qaz = false;
    }
    return qaz

}

function PNB(el) {
    var b2 = Number(el.value);
    var qaz;
    if (isNaN(b2)) {
        qaz = true;
    } else {
        qaz = false;
    }
    return qaz
}

function PNN(el) {
    var b2 = Number(el.value);
    var qaz;
    if (b2 == 0) {
        qaz = true;
    } else {
        qaz = false;
    }
    return qaz
}
















/*function ts() {
    var myel = document.getElementById('itog');
    var fun = document.getElementById('fun').value;
    var s1 = Number(document.getElementById('s1').value);
    var s2 = Number(document.getElementById('s2').value);
    var msg3 = document.getElementById('msg1');
    var fun1;


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
}*/