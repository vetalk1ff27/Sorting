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
console.log(z12);



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