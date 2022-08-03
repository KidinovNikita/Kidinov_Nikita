//Задание номер 1//
function arrayFill(value, length) {
    let arrTy = [];
    for (let i = 0; i < length; i++) {
        arrTy.push(value);
    }
    return arrTy;
}
console.log(arrayFill('x', 5));
//задание номер 2//
function isNumberInRange (num) {
    return num > 0 && num <= 10;
}
console.log(isNumberInRange(10))
//Задание номер 3//
function isEvent(num) {
    return num % 2 === 0;
}
console.log(isEvent(5));
//Задание номер 4//
var arr = [0,4,7,3,5,6,9,5,4,7,8,3,2,4,56,6,8,69];
var newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (isEven(i)) {
        newArr.push(i);
    }
}
console.log(newArr);
function isEven(num) {
    return num % 2 === 0;
}
//Задание номер 5//
let num = prompt('введите число', );
let exp = prompt('введите степень', );
let result = 1;
let cnt = 0;
while(cnt < exp) {
    result *= num;
    cnt++;
}
console.log(result);
//Задание номер 6//
let age = +prompt('Введите возраст');
function ageMy (a) {
    a>16 ? alert('Добро пожаловать!') : alert('Вы еще молоды!');
}
ageMy(age)
//Задание номер 7//
let ageT = +prompt('Введите возраст');
function ageMyt (a) {
    if (a === undefined || !a){
        alert('Введите ваш возраст')
    }else {
        a>16 ? alert('Добро пожаловать!') : alert('Вы еще молоды!');
    }
}
ageMyt(ageT)
//Задание номер 8//
let str = 'You should read';
let res = [];
let aRr = str.split(' ');
for (let i = 0; i < aRr.length; i++) {
 res.push(ucfirst(aRr[i]));
}
let newStr = res.join(' ');
console.log(res);
console.log(newStr);
function ucfirst(word) {
   return word[0].toUpperCase() + word.substr(1);
}
//Задание номер 9//
function unfirst(strA) {
     return strA[0].toUpperCase() + strA.substring(1,strA.length)
 }
 let strA = 'var_text_hello';
 let arrA = strA.split('_');
 for (let i = 1 ; i < arrA.length ; i++){
     arrA[i] = unfirst(arrA[i]);
 }
 strA = arrA.join('');
console.log(strA)
//Задание номер 10//
function inArray(value,arR) {
   for (let i = 0; i < arR.length; i++) {
     if (arR[i] === value) {
       return true;
     }
   }
   return false;
 }
var mas = [4,6,78,432,6,5,7,8,9,3,4,5,6,7];
console.log(inArray(1,mas))

