// 1900-09-11

// const h1=document.querySelector('h1')

// const D=new Date();
// console.log(D);
// console.log(D.getFullYear())
// console.log(D.getHours()+" : "+D.getMinutes()+ " : "+ D.getSeconds())
// console.log(D.getMonth());
// console.log(D.getMilliseconds());
// console.log(D.getTime());

// const P=new Date("2024-02-01");
// const T=new Date();

// const days=["კვირა","ორშ","სამშ","ოთხ","ხუთ","პარ","შაბ"]
// console.log(days[P.getDay()])

// const defferent=T.getTime()-P.getTime();
// const day=24*60*60*1000;

// console.log(P.getTime())
// console.log(T.getTime())
// console.log(defferent)
// console.log(day)
// console.log(parseInt(defferent/day))




const isDate = function(d){
    return d instanceof Date 
}


const P=new Date("1980-09-11");
const Bday=new Date("1998-02-06");
const deff=Bday.getTime()-P.getTime();
const day=24*60*60*1000;
const days=["კვირა","ორშ","სამშ","ოთხ","ხუთ","პარ","შაბ"]


console.log(P.getTime())
console.log(Bday.getTime())
console.log(deff)
console.log(parseInt(deff/day))
console.log(days[Bday.getDay()])



console.log(isDate(days[Bday.getDay()]))
console.log(isDate(P.getTime()))
console.log(isDate(Bday.getTime()))
console.log(isDate(deff))
console.log(isDate(parseInt(deff/day)))
console.log(isDate(P))
console.log(isDate(Bday))




function getDaysinMonth(month,year){
    const month=month.getMonth()+1;

}






