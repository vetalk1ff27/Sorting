const symbolsMap = {
    "A": "11",
    "d": "44",
    "B": "12",
    "C": "13",
    "D": "14",
    "E": "15",
    "F": "16",
    "G": "17",
    "H": "18",
    "I": "19",
    "J": "21",
    "K": "22",
    "L": "23",
    "M": "24",
    "N": "25",
    "O": "26",
    "P": "27",
    "Q": "28",
    "R": "29",
    "S": "31",
    "T": "32",
    "U": "33",
    "V": "34",
    "W": "35",
    "X": "36",
    "Y": "37",
    "Z": "38"
};

function replaceSymbol(symbol) { //функция замены буквы на цифровой код
    return symbolsMap[symbol] || symbol; //возвращать false есть нет символа в объекте
}

let str = "Add, BUS, ABBA, BUSY, DADY, ADY";

let numbers = str.replace(/./gi,replaceSymbol); //замена букв (заменить на функцию с циклом)  !!!

function sorting(array)  //сортировка пузырьком
{
    let length = array.length;
    for (let i = 0; i < length-1; i++)
    {
        for (let j = 0; j < length-1-i; j++)
        {
            if (array[j+1] < array[j])
            { let min = array[j+1];
                array[j+1] = array[j];
                array[j] = min;
            }
        }
    }
    return array;
}

function flippedObject(obj) {  // функция переворота объекта
    let revertObj = {};
    values = Object.values(obj);
    keys = Object.keys(obj);
    for (let i = 0; i < values.length; i++) {
        revertObj[values[i]] = keys[i];
    }
return revertObj;
}

const charsMap = (flippedObject(symbolsMap)); // обратный объект

function replaceNumber(code) { //функция замены цифрового кода на буквы
    return charsMap[code] || code;
}

console.log(numbers);

//numbers = [numbers.split(",")]; //подмассив
//console.log(numbers);

/*numbers = numbers.split(",").map(function(item){  //из строки в массив цисел
    return parseFloat(item);
})*/


numbers = numbers.split(", "); //из строки в массив строк

for (let i = 0; i < numbers.length; i++) {  //массив как подмассив
    numbers[i] = numbers[i].split(",");/*.map(function (item) {
        return parseFloat(item)
    })*/
}
//console.log(numbers);
console.log(sorting(numbers));

console.log(numbers.length);
/*
//выборка по 2 символа
let x1 = numbers[0][0].slice(0, 2);
console.log(x1);
let x2 = numbers[0][0].slice(2, 4);
console.log(x2);
let x3 = numbers[0][0].slice(4, 6);
console.log(x3);

//добавление элементов(состоящих из 2х символов) в массив
let arr99 = [];
arr99.push(x1);
arr99.push(x2);
arr99.push(x3);
console.log(arr99);

numbers[0] = arr99;
console.log(numbers);

// замена
numbers[0][0] = replaceNumber(numbers[0][0]);
numbers[0][1] = replaceNumber(numbers[0][1]);
numbers[0][2] = replaceNumber(numbers[0][2]);
console.log(numbers);

let z12 = numbers[0].join("");
console.log(z12);*/

//реализовать процесс разделения циферного значения слова по 2 символа

//каждое слово отдельный подмассив разделенный по 2

/*
let x = 11;

console.log(replaceNumber(x));
*/
console.log(numbers[0][0].length);

function splitByTwoChars (array) {
    let tmpArray = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            tmpArray[i] = [];
            for (let n = 0; n < array[i][j].length; n += 2) {
                let x = array[i][j].slice(n, (n+2));
                tmpArray[i].push(x);
            }
        }
    }
    return tmpArray;
}

console.log(splitByTwoChars(numbers));