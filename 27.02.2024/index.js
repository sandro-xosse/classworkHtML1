// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7,);

// console.log(part)

// let text1 = "ABCDEFqD   aSDQ   DSDGHIJKLMNOPQRSTUVWwfwasdfsaddddsfdXYZ";
// let length = text1.length;

// console.log(length)

// const paragraph = "I think Ruth's dog is cuter than your dog!";
// console.log(paragraph.replace("Ruth's", 'her'));


// function isString(str){
//     return typeof str==="string"
// }

// console.log(isString(1,2))


// const isBlank=function(str){
//     if(typeof str!=="string"){
//         throw new Error('parameter ,ust be a')
//     }
//     return str.length===0;
// }

// console.log(isBlank(''))



// const text='Hello world'
// console.log(text.split(" "))


// const getPart=(str,number)=>{
//     return str.slice(0,number)
// }

// console.log(getPart('Robert Stone',7))



// const text='Robert Stone fsadfas sdga'

// function abbrevName(str){
//     const arr=str.split(' ')
//     const first=arr[0];
//     const second=arr[1].slice(0,1)+'.';
//     return `${first} ${second}`
// }

// console.log(abbrevName(text))


// const mail="Robert_Stone@gmail.com"

// const protectEmail=(email)=>{
//     const indexFirst=email.indexOf('_');
//     const indexSecond=email.indexOf('@');
//     const deleted=mail.slice(indexFirst,indexSecond);

//     return email.replace(deleted,'...')

// }

// console.log(protectEmail(mail))




// const text='Robin Sing from USA.';

// function stringParametres(str){
//     const res=str.split(' ').map(el=>el.toLowerCase()).join('-');
//     return res.endsWith('.')?res.slice(0,res.length-1):res;
// }

// console.log(stringParametres(text))




// const text='robin Sing from USA.';

// function test(str){
//     return str.replace(str[0],str[0].toUpperCase())
// }

// console.log(test(text))





// const text='robin Sing from USA.';

// function test(str){
//     return str.split(' ').map(el=>el.replace(el[0],el[0].toUpperCase())).join(' ')
// }

// console.log(test(text))


// const text='roBin Sing from USA.';

// function test(str){
//     let res=''
//     for(let i=0;i<str.length;i++){
//         let char=str[i]
//         if(char.toUpperCase()===char){
//             res+=char.toLowerCase();
//         }
//         else {
//             res+=char.toUpperCase();
//         }
//     }
//     return res
// }

// console.log(test(text))

