// const person={
//     firstName:'John',
//     lastName:'Doe',
//     age:35,
//     isMaried:true


// function getKyes(obj){
//     const res=[]
//     for(let key in obj){
//         res.push(key)
//     }
//     return res
// }

// console.log(getKyes(person))


// function getKyes(arr){
//     let res=[]
//     for(let i=0; i<arr.length; i++){
//         res.push
//     }
//     return res
// }

// console.log(getKyes(person))






// function getValues(obj){
//     const res=[];
//     for(let key in obj){
//         res.push(obj[key])
//     }
//     return res;
//  }
//  console.log(getValues(person))










const fruits = ["Banana", "Orange", "Apple",'kiwi', "Mango"];

// function check(arr,par){
//     return arr.indexOf(par)>=0;
//  }
 
//  console.log(check(fruits,"Orangeqq"));

// console.log(fruits.includes('kiwi'))


function checkFruit(arr,fruit){
    if (arr.indexOf(fruit)>=0){
        return true
    }
    else false
}

console.log(checkFruit(fruits,'kiwi'))








// const fruits2 = ["Banana", "Orange", 'kiwi', "Apple", 'kiwi',"Mango"];


// function getQuantity(arr, value){
//     let res=0;
//     for(let item of arr){
//         if(item===value) res++
//     }
//     return res
// }

// console.log(getQuantity(fruits2,'kiwi'))
