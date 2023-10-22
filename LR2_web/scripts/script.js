function moveTextToTable() {
    // Отримуємо елементи абзаців і комірок таблиці за їх ID
    var paragraph1 = document.querySelector("div > div:nth-of-type(1) p");
    var paragraph2 = document.querySelector("div > div:nth-of-type(2) p");
    var paragraph3 = document.querySelector("div > div:nth-of-type(3) p");

    var cell1 = document.getElementById("cell1");
    var cell2 = document.getElementById("cell2");
    var cell5 = document.getElementById("cell5");
    var cell8 = document.getElementById("cell8");

    // Переміщуємо текст абзаців в комірки таблиці
    cell2.innerHTML = paragraph1.innerHTML;
    cell5.innerHTML = paragraph2.innerHTML;
    cell8.innerHTML = paragraph3.innerHTML;

    // Отримуємо заголовки та поміщаємо їх в відповідні комірки таблиці
    var header1 = document.querySelector("div > div:nth-of-type(1) h1").innerHTML;
    var header2 = document.querySelector("div > div:nth-of-type(2) h1").innerHTML;
    var header3 = document.querySelector("div > div:nth-of-type(3) h1").innerHTML;

    cell1.innerHTML = header1;
    cell4.innerHTML = header2;
    cell7.innerHTML = header3;

    // Видаляємо абзаци та заголовки зі сторінки
    paragraph1.remove();
    paragraph2.remove();
    paragraph3.remove();
    document.querySelector("div > div:nth-of-type(1) h1").remove();
    document.querySelector("div > div:nth-of-type(2) h1").remove();
    document.querySelector("div > div:nth-of-type(3) h1").remove();
}
