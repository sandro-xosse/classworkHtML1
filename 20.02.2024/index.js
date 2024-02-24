// const arr=[1,2,3,4,5,6]

// function test(item,index,paramsArray){
//     console.log('item',item)
//     console.log('index',index)
//     console.log('paramsArray',paramsArray)
//     console.log('***************')
//     return item+30
// }

// const mapped=arr.map(test)

// console.log(mapped)






// 1)

// const input = [1, 2, 3, 4, 5];

// const mapped=input.map(element => element + 0)

// console.log(mapped)




// 2)
// const input = [1, -4, 12, 0, -3, 29, -150];

// const filtered=input.filter(element => element > 0 )
// console.log(filtered)
// const reduced=filtered.reduce((total,current) => total+current)
// console.log(reduced)





// const input = "George Raymond Richard Martin";
// input.split(" ")
// console.log(input)



// const input = [
//     {
//       name: "John",
//       age: 13,
//     },
//     {
//       name: "Mark",
//       age: 56,
//     },
//     {
//       name: "Rachel",
//       age: 45,
//     },
//     {
//       name: "Nate",
//       age: 67,
//     },
//     {
//       name: "Jennifer",
//       age: 65,
//     },
//   ];

//   const ages = input.map((person) => person.age);
//   console.log(ages)
//   console.log(Math.min(...ages))
//   console.log(Math.max(...ages))
//   console.log((Math.max(...ages))-(Math.min(...ages)))
//   const arr=[Math.min(...ages),Math.max(...ages),Math.max(...ages)-Math.min(...ages)]
// console.log(arr)





// const students = [
//     { name: "Alice", scores: [90, 85, 92] },
//     { name: "Bob", scores: [75, 80, 85] },
//     { name: "Charlie", scores: [90, 95, 85] },
//     { name: "Jack", scores: [100, 100, 100] }
//   ];

//   const filtered=students.filter(element => element > 99)
//   console.log(filtered)




// const products = [
//   { name: "Product 1", price: 20, category: "Electronics" },
//   { name: "Product 2", price: 30, category: "Clothes" },
//   { name: "Product 3", price: 40, category: "Electronics" },
//   { name: "Product 4", price: 50, category: "Clothes" },
//   { name: "Product 5", price: 70, category: "Clothes" },
//   { name: "Product 6", price: 70, category: "Electronics" },
//   { name: "Product 7", price: 80, category: "Clothes" },
//   { name: "Product 8", price: 90, category: "Electronics" },
// ];


//   function getData(productArray){
//     const res=productArray.reduce((acum,item)=>{
//         let key=item.category;
//         if(acum[key]){
//             acum[key].push(item.price)
//         }
//         else{
//             acum[key]=[item.price]
//         }
//     },{})

//     const res2=[];
//     for(let item in res){
//         let averagePrice=res[key].reduce((a,b)=>a+b)/item.length
//     }



//   }




// const res= products.reduce((acum,item)=>{
//     let key=item.category;
//     if(acum[key]){
//         acum[key].push(item.price)
//         return acum
//     }
//     else{
//         acum[key]=[item.price]
//         return acum
//     }
// },{})


// const res=products.reduce((acum,item)=>{
//   let key=item.category;
//   if(acum[key]){
//       acum[key].push(item.price)
//   }
//   else{
//       acum[key]=[item.price]
//       return acum
//   }
// },{})



// console.log(res)



//   }




// const res= products.reduce((acum,item)=>{
//     let key=item.category;
//     if(acum[key]){
//         acum[key].push(item.price)
//         return acum
//     }
//     else{
//         acum[key]=[item.price]
//         return acum
//     }
// },{})


// const res=products.reduce((acum,item)=>{
//     let key=item.category;
//     if(acum[key]){
//         acum[key].push(item.price)
//     }
//     else{
//         acum[key]=[item.price]
//         return acum
//     }
// },{})



// console.log(res)







// home


// ***********************************************************

// const myArray=[1,2,3,4,5,1,6,7,8,9,21,2,5,7,3,8,8,9,27,45]

// function getUnique(arr){return arr.reduce((a,b)=>a.includes(b)?a:[...a,b],[])};

// console.log(getUnique(myArray))


// *****************************************************

// const uniqArray=myArray.reduce((a,b) => {
//     if(a.includes(b)){
//         return a
//     }
//     else {
//         a.push(b)
//         return a
//     }
// },[])


// console.log(uniqArray)


// ****************************************************

// function getUniqueArr(arr,unique=[]){
//     if(arr.length){
//         let item=arr[0];
//         let lastIndex=arr.lastIndexOf(item);
//         lastIndex===0?unique.push(arr.splice(0,1)[0]):arr.splice(0,1);
//         getUniqueArr(arr,unique)
//     }
//     return unique
// }

// console.log(getUniqueArr(myArray))



// *****************************************

// const myArray2=[...myArray]

// const uniqArray=[]

// for(let item of myArray){
//     let firstI=myArray2.indexOf(item);
//     let lastI=myArray2.lastIndexOf(item);
//     if(firstI===lastI){
//         uniqArray.push(item)
//     }
//     else {
//         myArray2.splice(firstI,1)
//     }
// }

// console.log(uniqArray)

// *************************************************


// 1)iteration
// 2)Array.prototype.LastindexOf
// 3)Array.prototype.indexof

// function universarr(arr){
//     for (let a=0; a<arr.length; a++){

//     }
// }




// const uniqArray=[]
// myArray.forEach((item,index,arr)=>{
//     const arr2=[...myArray]
//     let firstI=arr2.indexOf(item);
//     let lastI=arr2.lastIndexOf(item);
//     if(firstI===lastI){
//         uniqArray.push(item);
//     }
//     else{
//         arr2.slice(firstI,1)
//     }
// })

// console.log(uniqArray)











//   const productsByCategory = products.reduce((acc, product) => {
//     const category = product.category;
//     if (!acc[category]) {
//       acc[category] = [];
//     }
//     acc[category].push(product);
//     return acc;
//   }, {});

//   console.log(productsByCategory)

//   const avgPriceByCategory = Object.keys(productsByCategory).map(category => {
//     const sum = productsByCategory[category].reduce((acc, product) => acc + product.price, 0);
//     return { category: category, average: sum / productsByCategory[category].length };
//   });

//   console.log(avgPriceByCategory)

//   const highPricedCategories = avgPriceByCategory.filter(category => category.average > 50);

//   console.log(highPricedCategories)
  

// const myArray=[1,2,3,4,5,6,7,8,9,21,2,5,7,27,45]

// // 1)itration
// // 2)Array.prototype.LastindexOf
// // 3)Array.prototype.indexof







const myArray=[1,2,3,4,5,1,6,7,8,9,21,2,5,7,3,8,8,9,27,45]

const sortedarray=myArray.sort((a,b)=>a-b)

console.log(sortedarray)



// **************************************************************

// function sum(arr){return arr.reduce((a,b)=>a+b)}
// function getAverage(arr){
//     const Sum=sum(arr);
//     return Sum/arr.length
// }

// console.log(getAverage(myArray))