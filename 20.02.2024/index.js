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






// home

const myArray=[1,2,3,4,5,6,7,8,9,21,2,5,7,27,45]

// 1)itration
// 2)Array.prototype.LastindexOf
// 3)Array.prototype.indexof












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
  