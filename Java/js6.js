class Human {
    constructor(name,growth,weigh,date,gender,Boolean) {
        this.name = name;
        this.growth = growth;
        this.weigh = weigh;
        this.date = date;
        this.gender = gender;
        this.Boolean = Boolean;
    }
    an (){
        alert(`Hello,i am ${this.name}`)
    }
    get getInfo(){
     const info = {
         name: this.name,
         growth:this.growth,
         weigh:this.weigh,
         date:this.date,
         gender:this.gender,
         Boolean:this.Boolean
     }
        console.log(info)
    }
 set setName(name){
        this.name = 'Denis';
        this.Boolean = false;
        this.date = new Date(1996,3,8);
        this.growth = 174;
 }


}
const myHuman = new Human('Nikita',186,60,new Date(1998,3,8),'male', true );
myHuman.getInfo;
myHuman.setName = '';
myHuman.getInfo;
myHuman.an();
//Разработчик//
class Developer extends Human{
    constructor(name,growth,weigh,date,gender,Boolean,career) {
        super(name,growth,weigh,date,gender,Boolean);
     this.career = career;
     this.company = [{
         start: new Date(2016, 5, 14),
         end: new Date(2017, 6, 14),
         salaryPerMonth: 700,
         position: 'middle',
         companyName: 'Oracle'
     },
     {
         start: new Date(2012, 6, 14),
         end: new Date(2014, 9, 14),
         salaryPerMonth: 900,
         position: 'junior',
         companyName: 'Human'
     }]
  }
    anHi () {
        alert(`Hi, my name is ${this.name}, I'm a Frontend developer. I have been working since ${this.career}`)
    }
   salary (){
        let comPan ;
        this.company.forEach((el) => {
            let all = (el.end.getFullYear() - el.start.getFullYear()) * 12;
            let mon = all + (el.end.getMonth() - el.start.getMonth());
            comPan = mon + el.salaryPerMonth;
            })
       console.log(comPan)
   }
    get getCompanyInfo(){
        let companyN = prompt('Name Company:')
        this.company.filter((el) => {
           if (el.companyName === companyN){
               console.log((el));
           }
         })
    }
    set setNew (newCompany){
        this.company.push(newCompany)
        console.log(this.company);
    }
}
const myDevel = new Developer('Maksim',175,77,new Date(1998,2,1),'male',false , '2012-01-08');
myDevel.anHi();
myDevel.getCompanyInfo;
console.log(myDevel)
//Строитель//
class Builder extends Human{
    constructor(name,growth,weigh,date,gender,Boolean,local,toolse,speed) {
        super(name,growth,weigh,date,gender,Boolean);
        this.local = local;
        this.toolse = toolse;
        this.speed = speed;
    }
  house (){
        let houseDay = +prompt('Enter meters',);
        let houseTime = (houseDay * this.speed) / 30;

        let day = 0;
        let week = 0;
        let month = 0;
        let year = 0;

        if (houseTime < 24){
            console.log(`Construction time ${houseTime}`);
        }else if (houseTime >= 50 && houseTime <= 150){
            day = (houseTime / 50).toString();
            houseTime = day[2] || 0 ;
            console.log(`Construction time ${parseInt(day)} days and ${houseTime} hours`);
        }else if (houseTime >= 150 && houseTime <= 300){
            week = (houseTime / 150).toString();
            day = week[2];
            houseTime = week[3];
            console.log(`Construction time ${parseInt(week)} weeks,${day} days and ${houseTime} hours`);
        }else if (houseTime >= 300 && houseTime <= 800){
            month = (houseTime/300).toString();
            week = month[2];
            day = month[3];
            houseTime = month[4];
            console.log(`Construction time ${parseInt(month)} months,${week} weeks ,${day} days and ${houseTime}hours`)
        }else {
            year = (houseTime/800).toString();
            month = year [2];
            week = year [3];
            day = year [4];
            houseTime = year [5];
            console.log(`Construction time ${parseInt(year)} years , ${month} months,${week} weeks ,${day} days and ${houseTime} hours`)
        }
  }
}
const myBuilder = new Builder('Igor',170,80,new Date(1999,8,8),'male',true,'Mariupol',['pick','ax','screwdriver'],70);
console.log(myBuilder)
myBuilder.house();

