// function age(a){
//     let daTe=2024;
//     return personAge=daTe-a
// }

// let NiKe=1980

// console.log(age(1987))
// console.log(age(NiKe))

// function pensioner(naMe){
//     if (personAge<60){
//         console.log(naMe + " is " + personAge + " years old he will be retires 10 years")
//     }
//     else if (personAge>=60){
//         console.log(naMe + " is " + personAge + " years old and he is retires")
//     }
// }

// console.log(pensioner(NiKe))

// const today=2024

// function calcAge(yearsofBirth){
//     return today-yearsofBirth
// }

// function calcRetires(name,yearsofBirth){
//     const age=calcAge(yearsofBirth)
//     if (age<60){
//         let retires=60-age;
//         returm `${name} + " is " + ${age} + " years old he will be retires ${retires} years`
//     }
//     else{
//         return `${name} + " is " + ${age} + years old and he is retires`
//     }
// }

// console.log(calcRetires('sandro',1998))

// function personalInfo(name,profesion){
//     if (profesion== 'teahcer'){
//         return `${name} ასწავლის სპორტს ბავშვებს`
//     }
//     else if(profesion== 'driver'){
//         return `${name} მართავს ავტობუსს რუსთავში`
//     }
//     else if(profesion== 'disainer'){
//         return `${name} ქმნის დიზაინს ვებ-გვერდებისთვის`
//     }
//     else{
//         return `${name} სამუშაო ადგილი უცნობია`
//     }
// }

// console.log(personalInfo('გივი','driver'))
// console.log(personalInfo('მაკა','disainer'))
// console.log(personalInfo('თემო',''))

const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const odd=arr.filter((item)=>item%2>0)
console.log(odd)