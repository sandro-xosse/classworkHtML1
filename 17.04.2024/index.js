// 1) შეაბრუნე მასივი:
// let array = [1, 2, 3, 4, 5];

// console.log(array.reverse())


// 2) დააბრუნე მასივის ჯამი:
// let array = [1, 2, 3, 4,];
// function calSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(calSum(array));


// 3) დააბრუნე მაქსიმალური მნიშვნელობა მოცემული მასივიდან;
// let array = [1, 2, 3, 4, 5];
// let maxInArray=Math.max(...array)
// console.log(maxInArray)


// 4) შექმენით მასივი რომელიც შედგება მხოლოდ ლუწი რიცხვებისგან:
// let array = [1, 2, 3, 4, 5];

// let newArray = array.filter(num => num % 2 === 0);
// console.log(newArray)


// function evenChoose(arr){
//     let evenarray=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] % 2 === 0){
//             evenarray.push(arr[i])
//         }
//     }
//     return evenarray
// }

// console.log(evenChoose(array))


// 5) Merge two arrays into one:
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// const array3=array1.concat(array2)
// console.log(array3)


// 6) შექმენით ფუნქცია რომელიც დაითვლის კონკრეტული ელემენტის რაოდენობას მასივში:
// მაგ: console.log(countOccurrences(array, 3)); // Output: 3
// let array = [1, 2, 2, 3, 3, 3, 4];

// function countOccurrences(array,num){
//     let quantity=0;

//     for(let i = 0; i < array.length; i++){
//          if(array[i]===num){
//             quantity+=1
//         }
//     }
//     return quantity
// }
// console.log(countOccurrences(array, 3))



// 7) Remove duplicate elements from an array
// მაგ: console.log(removeDuplicates(array)); // Output: [1, 2, 3, 4, 5]
// let array = [1, 2, 2, 3, 4, 4, 5];


// 8) Multiply each element of an array by a number.
// მაგ: console.log(multiplyElements(array, 2)); // Output: [2, 4, 6, 8, 10]

// let array = [1, 2, 3, 4, 5];

// function multiplyElements(arr,num){
//     const map1 = arr.map((x) => x * num);
//     return map1
// }

// console.log(multiplyElements(array, 5))


// 9 ) Find both the minimum and maximum values in an array.
// console.log(findMinMax(array)); // Output: { min: 1, max: 5 }
// let array = [1, 2, 3, 4, 5];

// function findMinMax(arr){
//     let maxInArray=Math.max(...array)
//     let minInArray=Math.min(...array)
//     return `min: ${maxInArray},max:${minInArray}`
// }

// console.log(findMinMax(array))



// 10) Flatten an array of arrays into a single array.
// console.log(flattenArray(array)); // Output: [1, 2, 3, 4, 5, 6]

// let array = [[1, 2], [3, 4], [5, 6]];
// console.log(array.flat())

// 11)
// let user="Politician"

// switch (user) {
//     case 'Jabroni':
//       console.log('patron Tequila')
//       break
//     case 'School Counselor':
//         console.log('Anything whit alcohol')
//         break
//     case 'Programmer':
//         console.log('Hipster Craft Beer')
//         break   
//     case 'Bike Gang Member':
//          console.log('Moonshine')
//         break  
//     case 'Politician':
//       console.log('Your tax dollar')
//       break 
//     case 'Rapper':
//        console.log('Cristal')
//        break        
        
//     default:
//       console.log('Beer')
//   }



//OBJECT SET

// let array = [1, 2, 2, 3, 4, 4, 5];
// const res=Array.from(new Set(array))
// console.log(res)

// const mySet=new Set()



//OBJECT MAP

// const myMap=new Map();
// myMap.set()