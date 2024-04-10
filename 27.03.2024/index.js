
// async function getCurrencies(){
//     const url='https://jsonplaceholder.typicode.com/posts/1'
//     const data= await fetch(url);
//     const result=await data.json();
//     console.log(result)
// }

// let data= fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));


import{getPost} from'./get-post-service.js'
import{get} from'./get-post-service.js'

async function getPost(url){
    let data = await fetch(url);
    let result = await data.json();
    return result;
}

export async function createPost(url,post){
    method: 'POST',
    body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
}
