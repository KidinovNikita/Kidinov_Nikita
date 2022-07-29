//Задание номер 1//
let myNumber=5 ;
console.log(myNumber)
let myString='Text';
console.log(myString)
let myBigInt=500000n;
console.log(myBigInt)
let qwer=true;
console.log(qwer)
let trued=undefined;
console.log(trued)
let myNull=null;
console.log(myNull)
let mySymb=Symbol('id');
console.log(mySymb)
let myObj= {
    name: 'Mykyta',
    lastName: 'Cher',
    age:26
};
console.log(myObj);
//Задание номер 2//
var myNum = 20;
myNum=300;
console.log(myNum)
let myStr= 'Text off';
myStr='Text on'
console.log(myStr)
const abc=60000n;
console.log(abc)
//Задание номер 3//
let myN='123';
console.log(+myN)
console.log(Number(myN))
console.log(Boolean === myN)

let myT= 35 ;
console.log(myT)
console.log(String(myT))
console.log(undefined+myT)
// Задание номер 4//
z='My text';
x=60;
c=70000n;
v=true;
b=undefined;
n=null;
m=Symbol('@')
l={
    name: 'Mykyta',
    lastName: 'Cher',
    age:26
};
let cons= z + x;
console.log(cons)
cons= z + c;
console.log(cons)
cons= z + v;
console.log(cons)
cons= z + b;
console.log(cons)
cons= z + n;
console.log(cons)
cons= z + m.toString();
console.log(cons)
cons= z + l;
console.log(cons)
cons= z + z;
console.log(cons)
//Сложение числа//
let con= x + z;
console.log(con)
con= x + x;
console.log(con)
con= x + v;
console.log(con)
con= x + b;
console.log(con)
con= x + n;
console.log(con)
con= x + l;
console.log(con)
//Задание номер 5//
let co= z - z;
console.log(co)
co= z - x;
console.log(co)
co= z - v;
console.log(co)
co= z - b;
console.log(co)
co= z - n;
console.log(co)
co= z - l;
console.log(co)
//Вычетание числа//
let ca= x - z;
console.log(ca)
ca= x - x;
console.log(ca)
ca= x - v;
console.log(ca)
ca= x - b;
console.log(ca)
ca= x - n;
console.log(ca)
ca= x - l;
console.log(ca)
//Задание номер 6//
let logi = prompt('login',);
let passw = prompt('password');
if ((logi === 'kykold' && passw === '1234asdQQ')){
    alert('«Добро пожаловать»');
} else {
    alert('«Вход воспрещен»');
}
//Задание номер 7//
let year = prompt('Укажите год рождения ')
let age = 2022 - year;
if (age >= 16) {
    alert ('«добро пожаловать»') ;
} else {
    alert('«вход воспрещен»');
}
//Задание номер 8//
let nad = prompt('Введите стаж работы:');
if (nad >=0 && nad < 10) {
    alert('Ваша надбавка 0%');
} else if (nad >=3 && nad < 10) {
    alert('Ваша надбавка 10%');
} else if (nad >=10 && nad < 20) {
    alert('Ваша надбавка 20%');
} else if (nad >=20 && nad < 30) {
    alert('Ваша надбавка 25%');
} else if (nad >=30 && nad < 40) {
    alert('Ваша надбавка 30%');
}
//Задание номер 9(if-else)//
let mon = prompt('Введите число');
if (mon == 1) {
    alert('Monday');
} else if (mon == 2) {
    alert('Tuesday');
} else if (mon == 3) {
    alert('Wednesday');
} else if (mon == 4) {
    alert('Thursday');
} else if (mon == 5) {
    alert('Friday');
} else if (mon == 6) {
    alert('Saturday');
} else if (mon == 7) {
    alert('Sunday');
}
//Switch-case//
const mond = prompt('Введите число');
console.log(mond);
switch (mond) {
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default :
        alert('Ответ не верный');
}
//Задание номер 10//
let number = +prompt('Введите число:');
if (number > 0) {
    alert('1');
} else if (number < 0) {
    alert('-1');
} else if (number === 0) {
    alert('0');
}
//Задание номер 11//
let login = prompt('Кто вы ?')
let message = (login === 'Сотрудник') ? 'Привет' :
    (login === 'Директор') ? 'Здравствуйте' :
        (login === '') ? 'Нет логина' : '';
console.log(message)
//Задание номер 12//
let room = +prompt("Укажите номер квартиры:");
if ( (room >=1 ) && (room <=20) ) {
    alert('Это первый подьезд');
} else if ( (room >=21) && (room <= 48) ) {
    alert('Это второй подьезд');
} else if ( (room >= 49) && (room <= 90) ) {
    alert('Это третий подьезд');
} else {
    alert("Нет подьезда с таким номером!");
}
//Задание номер 13//
const bro =prompt('Укажите браузер');
if (bro === 'Edge') {
    alert('Ты пользуешься Edge!');
} else if (bro === 'Chrome'
    || bro === 'Firefox'
    || bro === 'Safari'
    || bro === 'Opera') {
    alert('Хорошо, мы поддерживаем и эти браузеры');
} else {
    alert('Мы надеемся, что эта страница выглядит нормально!');
}
//Задание номер 14//
let mY = +prompt('Введите число между 0 и 3','');
switch (mY) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}