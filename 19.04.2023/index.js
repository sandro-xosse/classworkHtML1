// 1.X დაწერეთ ფუნქცია რომელიც და დაგვიბრუნებს პარამეტრად გადაცემული რიცხვის
// შებრუნებულ რიცხვს .
// მაგ: შემავალი პარამეტრი: 32243 ---&gt; შდეგი: 34223;

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("34223"));


//  2.X	დაწერეთ JavaScript ფუნქცია, რომელიც მიიღებს სტრიქონს პარამეტრად და გარდაქმნის თითოეული სიტყვის პირველ ასოს მაღალ რეგისტრში.
// მაგ: შემავალი პარამეტრი:  'the quick brown fox' --> შდეგი:  'The Quick Brown Fox ';

// let input = 'the quick brown fox';
// function capitalizeWord(str) {
    
//     let words = str.split(" ");
//     let capitalWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//     let capitalString = capitalWords.join(" ");
//     return capitalString;
// }

// console.log(capitalizeWord(input));


//  3.X	დაწერეთ JavaScript ფუნქცია, რომელიც მიიღებს სტრიქონს პარამეტრად და პოულობს ყველაზე გრძელ სიტყვას სტრიქონში.

// let input = "The quick brown fox jumpssss over the lazy dog";
// function findLongestWord(str) {    
//     let words = str.split(" ");
//     let longestWord = "";
//     words.forEach(word => {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     });
//     return longestWord;
// }

// console.log(findLongestWord(input));


// 4.X	დაწერეთ JavaScript ფუნქცია, რომელიც მიიღებს არგუმენტს და დააბრუნებს მის ტიპს
// მაგ: ექვსი შესაძლო მნიშვნელობა, რომელსაც შეიძლება იყოს:
//                                  object, boolean, function, number, string, and undefined.

// function findTypeof(arg){
//     return typeof arg
// }
// console.log(findTypeof(12))
// console.log(findTypeof('Sandro'))



// 5.X	დაწერეთ JavaScript ფუნქცია, რომელიც მიიღებს არგუმენტს და თუ არგუმენტი იქნება მასიმვი დააბრუნებს  true  სხვა შემთხვევაში false 
//       მაგ: შემავალი პარამეტრი:  [1,2,3]--> შდეგი:  true ;
// მაგ: შემავალი პარამეტრი:  15 --> შდეგი:  false ;

// function isArray(input) {
//     return Array.isArray(input);
// }
// console.log(isArray([1, 2, 3])); 
// console.log(isArray(15));


// 6.X	დაწერეთ JavaScript პროგრამა, რომელიც დალოგავს შემდეგი ორგანზომილებიანი მასივის ელემენტებს:

//  let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// console.log(a.flat())


// 7.X	დაწერეთ JavaScript პროგრამა, რომელიც შემდეგი მასივის ყველა წევრს აიყვანს   კვადრატში და დაგვიბრუნებს ახალ მასივს.

// let arr=[1,2,3,4]  

// function multiElements(arr,){
//     const map1 = arr.map((x) => x * 2);
//     return map1
// }
// console.log(multiElements(arr))


// 8.X	დაწერეთ JavaScript პროგრამა, რომელიც დაგვიბრუნებს შემდეგი მასივის ყველა წევრს ჯამს  

// let arr=[1,2,3,4,5,6]  
// function calSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(calSum(arr));

// 9.X	დაწერეთ JavaScript პროგრამა, რომელიც დაალაგებს შემდეგი მასივის ზრდის მიხედვით; 

//    let arr=[4,1,7,3,5,9,2,8,6];
//    arr.sort((a,b)=>a-b)
//    console.log(arr)


// 10.X	დაწერეთ JavaScript პროგრამა, რომელიც დაალაგებს შემდეგი მასივის კლების მიხედვით; 

//    let arr=[4,1,7,3,5,9,2,8,6]
//    arr.sort((a,b)=>b-a)
//    console.log(arr)


// 11.X	დაწერეთ JavaScript ფუნქცია რომელიც მოცებული მსივისგან დაგვიბრუნებს ახალ მასივს  რომელშიდაც იქნებიან მხოლოდ კენტი რიცხვები 

//    let arr=[4,1,7,3,5,9,2,8,6]  
//    let newArray = arr.filter(num => num % 2 !== 0);
//    console.log(newArray)


// 12.X	დაწერეთ JavaScript ფუნქცია რომელიც მოცებული მსივისგან დაგვიბრუნებს ახალ მასივს  რომელშიდაც ელემენტები არ განმეორდება ; 
//    let arr=[1,2,1,3,2,4,3,]   შედეგი: [1,2,3,4];

// let array=[1,2,1,3,2,4,3,]
// const res=Array.from(new Set(array))
// console.log(res)


// 13.X	დაწერეთ JavaScript პროგრამა რომელიც მოცებული მსივისგან ამოჭრის ციფრ 9 -ს; 

//   let arr=[4,1,7,3,5,9,2,8,6] ;
//   function removeElement(arr) {
//     return arr.filter(element => element !== 9);
//   }
//   console.log(removeElement(arr));


// 14.X	დაწერეთ JavaScript პროგრამა რომელიც შემდეგ სტრინგისაგან: ” Robin Singh from USA” დაგვიბრუნებს შემდეგ სტრინგს: “robin-singh-from-usa”

// function reverseString(str) {
//     return str.toLowerCase().split(" ").join("-");
// }
// console.log(reverseString("Robin Singh from USA"));


// 15.X	ჩაწერეთ JavaScript ფუნქცია რომელიც სტრიქონის პირველი ასოს გადაიყვანს მაღალ რეგისტრში: 
// მაგ: let 'js string exercises'   შედეგი: "Js string exercises"

// function firstIndexTouppercase(str){
//     let res= str.charAt(0).toUpperCase()+str.slice(1)
//     return res
// }
// console.log(firstIndexTouppercase('js string exercises'));


// 17.X	ჩაწერეთ JavaScript ფუნქცია, რომელიც  გაიმეორებს სტრიქონს განსაზღვრული რაოდენობით.
// მაგ: repeatString('a', 4)  შედეგი: ‘aaaa’

// function repeatString(str,num){
//     if (num > 0) { 
//         return str.repeat(num); 
//       }
//       else {
//         return str;
//       }
// }
// console.log(repeatString('a', 4))

// 18.X	switch ის გამოყენებით , დაწერეთ ფუნქცი  სახელად trafficLight რომელიც იმის მიხედვით თუ რა პარამეტრი გადაეცემა ალერტ ბოქსის საშუალებით გამოიტანს შეტყობინებას  
// აღწერა: 
// trafficLight(‘red’)  "Stop immediately."
// trafficLight(‘yellow’)  " Prepare to stop“
// trafficLight(‘green’)  " Proceed or continue driving“
// სხვა შემთხვევაში   ‘Invalid traffic light color’


// let color='green'
// function trafficLight(color) {
//     switch(color) {
//         case 'red':
//             alert("Stop immediately.");
//             break;
//         case 'yellow':
//             alert("Prepare to stop.");
//             break;
//         case 'green':
//             alert("Proceed or continue driving.");
//             break;
//         default:
//             alert("Invalid traffic light color.");
//     }
// }

// trafficLight(color)



// 19.X	html ფაილში შექმენით ‘p’ ტეგი და button ღილაკი  და JavaScript საშუალებით ღილაკზე დაჭერის შემდეგ ‘p’ ში ჩაემატოს (ისე რომ არსებულიც დარჩეს) ახალი ტექსტი და ასევე შეიცვალოს ტექსტის ფერი.
// let text=document.querySelector('.sometext')
// let btn=document.querySelector('.changebtn')

// btn.addEventListener('click',(e)=>{
//     text.style.backgroundColor = "red";
//     text.style.color="white"
//     text.innerText =`Lorem ipsum dolor, sit amet consectetur adipisicing. lorem lorem lorem lorem lorem lorem lorem`
// })



// 20.X	html ფაილში შექმენით ხუთი ‘p’ ტეგი და ერთი button ღილაკი  და JavaScript საშუალებით ღილაკზე დაჭერის შემდეგ ყველა  ‘p’ ის შეეცვალოს ბეგრაუნდის ფერი ხოლო მეორეთ დაჭერის შემდეგ ისევ ძველ ფერს დაუბრუნდეს.

// let btn2=document.querySelector('.change2')
// let text2=document.querySelectorAll('.lorem');    


// function changeColor() {
//     for (let i = 0; i < text2.length; i++) {
//         text2[i].style.backgroundColor = "red"; 
//     }
//   }
// btn2.addEventListener('click',()=>{
//     changeColor()
// })

// function resetColor() {
//     for (let i = 0; i < text2.length; i++) {
//         text2[i].style.backgroundColor = "white";
//     }
//   }



// 21.X	html ფაილში შექმენით ორი ‘p’ ტეგი და ერთი button ღილაკი  და JavaScript საშუალებით ღილაკზე დაჭერის შემდეგ ერთ  ‘p’ თეგში ჩაიწეროს ბრაუზერის ფანჯრის სიგანე ხოლო მეორეში სიმაღლე.

// let windowWidth = window.innerWidth;
// let windowHeight = window.innerHeight;
// let widthheightbtn=document.querySelector('.whbtn')
// let paragraphwindowwidth=document.querySelector('.pwindowwidth')
// let paragraphwindowheight=document.querySelector('.pwindowheight')

// widthheightbtn.addEventListener('click',()=>{
//     paragraphwindowwidth.innerText=windowWidth;
//     paragraphwindowheight.innerText=windowHeight;
// })


// 22.X	html ფაილში შემოიტანეთ  map  “leaflet” ბიბლიოთეკის გამოყენებით  
// ბიბლიოთეკის ოფიციალური  web site: https://leafletjs.com

// let map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);