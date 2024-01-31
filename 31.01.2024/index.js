//  let x=42;
//  let y=10;

// //  x*=y
// // x/=y
// //  x%=y
//  x**=y

//  console.log(x)

//  function metoba(a,b){
//     if (a>b) {
//         return 'a'
//     }
//     else {
//         return 'b'
//     }
//  }

//  console.log(metoba(10,19))

// function test2(a){
//     if (a){
//         'true'
//     }
//     else {
//         'false'
//     }
// }

// function test2(a){
//     let res=a%2;
//     if(res>0){
//         return false
//     }
//     else{
//         return true
//     }
// }

// console.log(test2(5))
// console.log(test2(8))

// function test3(a){
//     return a**2
// }

// console.log(test3(3))

// function test4(a,b,c){
//     if (a>b && a>c){
//         return a
//     }
//     else if (b>a && b>c){
//         return b
//     }
//     else{
//         return c
//     }
// }

// console.log(test4(15,36,20))

// function shop(unitPrice, amount){  

//     let res1=amount%unitPrice;
//     let res2=amount/unitPrice;

//     if (res1==0){
//         return res2
//     }
//     else if(unitPrice>amount){
//         return 'თანხა არ არის საკმარისი'
//     }
//     else {
//         return res2-res1
//     }
// }

// console.log(shop(5,10))
// console.log(shop(5,21))
// console.log(shop(5,3))

// function shop(unitPrice, amount) {
//     if (unitPrice > amount) {
//         return "თანხა არ არის სკმარისი"
//     }

//     let change = amount % unitPrice
//     if (change == 0) {
//         let quantity = amount / unitPrice
//         return "თქვენ შეიძინეთ " + quantity + " ნივთი"
//     }

//     else {
//         amount = amount - change
//         let quantity = amount / unitPrice
//         return "თქვენ შეიძინეთ " + quantity + " ნივთი და ხურდა გეკუთვნით " + change + " ლარი"
//     }
// }

// console.log(shop(5, 10))
// console.log(shop(5, 21))
// console.log(shop(5, 5))
// console.log(shop(5, 3))
// console.log(shop(4, 20))

// function dad()
// {
// return 'hello world'
// }
// let a=dad()
// console.log(a)

// function dad1(name)
// {
// return 'hello '+ name
// }
// console.log(dad1('sandro'))

let a=0

function test(){
    a=a+1
    return a
}

console.log(test())
console.log(test())
console.log(test())
console.log(test())
console.log(test())