function formatNumber(myNumber) /* Функция для добовления 0 если число <=9 */ {
    if (myNumber <= 9) {
        myNumber = '0' + myNumber;
    }
    return myNumber;
}
function James(day) {
    
}
function ts() /*создания объектов временных рядов, для чего он я так и не допер */ {
    var myel = document.getElementById('myData');
    /* Аргумент поиска элементов в DOM ,
                                                                     Вопрос что за var myel?*/
    var dd = new Date(); /*Функция предоставления текущей даты в формате dd*/

    myel.innerText = formatNumber(dd.getDate()) + '.' + formatNumber(dd.getMonth() + 1) + '.' +
        dd.getFullYear() + ' ' + formatNumber(dd.getHours()) + ':' + formatNumber(dd.getMinutes());
    /*Как я понял, вывод информации 
                                                                                          в правильном порядке */
}