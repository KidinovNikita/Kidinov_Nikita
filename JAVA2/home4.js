//Задание номер 1//
let ab = ['a','b','c'];
let bc = [1,2,3];
let abc = ab.concat(bc);
console.log(abc)
//Задание номер 2//
let wo = ['a','b','c'];
wo.push(1,2,3);
console.log(wo)
//
let we = ['a','b','c'];
we.splice(2,'1','c',1,2,3);
console.log(we)
//Задание номер 3//
let wq = [1, 2, 3, 4, 5];
wq.splice(1,2);
console.log(wq)
//Задание номер 4//
let wx = [1, 2, 3, 4, 5];
wx.splice(3,0,'a', 'b', 'c');
console.log(wx)
//Задание номер 5//
const arr = [1, 2, 3, 4, 5];
const arr1 = [];
   for (let value in arr){
       arr1.push(arr[value] * 10)
   }
console.log(arr1)
//Задание номер 6//
let wy ='';
for (i=4; i<=400; i++){
    wy = wy+i+'';
}
document.write(wy)
//Задание номер 7//
let wd ='';
for ( i = 4; i <= 13; i = i +3) {
    wd = wd + i + ' ';
}
console.log(wd)
//Задание номер 8//
let wz = '';
for ( i = 654; i >= 0; i--) {
    wz = wz + i + ' ';
}
console.log(wz)
//Задание номер 9//
let wb = '';
for ( i = 1983; i <= 2017; i++) {
    wb = wb + i + ' ';
}
console.log(wb)
//Задание номер 10//
let wu = '';
for ( i = -4; i <= 100; i++) {
    wu = wu + i + ' ';
}
console.log(wu)
//Задание номер 11//
let wk = 0;
for (i = 0; i <= 100; i++) {
    wk = wk + i;
}
console.log(wk)
//Задание номер 12//
let myArr = [];
let myArrNik = prompt('Length');
for (let i=0; i < 5; i++) {
    myArrNik += 'x';
    myArr.push(myArrNik);
}
console.log(myArr);
//Задание номер 13//
let myQwe = [];
let qaz = +prompt('Enter the number');
for (let i = 0; i < 6; i++) {
      let qaz = '';
      for (let j = 0; j < i; j++) {
         qaz += i;
     }
      myQwe.push(qaz);
}
console.log(myQwe)
//Задание номер 14//
let qweD = [];
let height = 9;
let wight = 9;
for (let i= 0; i <= height ; i++){
    qweD[i]=[]
for (let j = 0;j <=wight; j++){
    qweD[i][j]=0;
    i === 0 ? qweD[i][j] = 'x' : 0 ;
    i === 9 ? qweD[i][j] = 'x' : 0 ;
    i === 0 ? qweD[i][j] = 'x' : 0 ;
    i === 9 ? qweD[i][j] = 'x' : 0 ;
    i === 0 ? qweD[0].length = 7 : 0 ;
    i === 9 ? qweD[9].length = 7 : 0 ;
   }
}
console.log(qweD)
//Задание номер 15//
let qweS = [] ;
let heiG = 9 ;
let widT = 9 ;
for (let i = 0 ; i <= widT ; i++){
    qweS[i] = [];
    for (let j = 0 ; j <= heiG ; j++){
        qweS[i][j]= (j + 1) * (1 + i);
    }
}
console.log(qweS)
//Задание номер 16//
let prod = +prompt('Введите количество товаров ');
const prodU = ['товар','товара','товаров']
function pro (prod){
    let result ;
    let proDy = prod % 100 ;
    if (proDy >= 5 && proDy <= 20) {
        result = prodU ['2'];
    } else {
        proDy = proDy %10 ;
    if (proDy === 1){
        result = prodU ['0'];
       } else if (proDy >= 2 && proDy <= 4){
        result = prodU ['1'];
    } else {
        result = prodU ['2'] ;
    }
   }
    return result ;
}
alert('В вашей корзине ' + pro(prod))
