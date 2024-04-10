const h1=document.querySelector('h1');
const start=document.querySelector('.start');
const stop=document.querySelector('.stop');
const reklam=document.querySelector('.reklam');
const closeReklam=document.querySelector('.close-reklam')



function showReklam(){
    reklam.classList.add('active')
}

setTimeout(showReklam,3000);
closeReklam.addEventListener('click',()=>{
    reklam.classList.remove('active')
})






function addOne(){
    let s=h1.innerText
    h1.innerText=+s+1    
}

let interval;
start.addEventListener('click',()=>{
    if(!interval){
        interval=setInterval(addOne,1000)
    }
})


stop.addEventListener('click',()=>{
    if(interval){
        clearInterval(interval);
        interval=undefined
    }
})



const h2=document.querySelector('h2');
const start2=document.querySelector('.start2');
const stop2=document.querySelector('.stop2');

function addTwo(){
    let s=h2.innerText
    h2.innerText=+s+2    
}

let interval2;
start2.addEventListener('click',()=>{
    if(!interval2){
        interval2=setInterval(addTwo,2000)
    }
})

stop2.addEventListener('click',()=>{
    if(interval2){
        clearInterval(interval2);
        interval2=undefined
    }
})


// setInterval(addOne,1000)












// const tbody=document.querySelector('tbody')


// const users=[]



// const user1={
//     fName:'john',
//     lName:'Doe',
//     adress:'ameriekeli'
// }

// // localStorage.setItem('myUser',JSON.stringify(user1))
// // console.log(localStorage.getItem('myUser'))
// // console.log(JSON.parse(localStorage.getItem('myUser')))


// const user2={
//     fName:'sandro',
//     lName:'xoss',
//     adress:'rustaveli'
// }

// // localStorage.setItem('myuser2',JSON.stringify(user2))
// // console.log(localStorage.getItem('myUser2'))
// // console.log(JSON.parse(localStorage.getItem('myUser')))


// const user3={
//     fName:'buba',
//     lName:'batman',
//     adress:'meskhi'    
// }

// // localStorage.setItem('user3',JSON.stringify(user3))
// // console.log(localStorage.getItem('myUser3'))
// // console.log(JSON.parse(localStorage.getItem('myUser3')))


// const user4={
//     fName:'zutxi',
//     lName:'lomidze',
//     adress:'signagi'    
// }


// // localStorage.removeItem('user3')
// // localStorage.clear()


// function addUser(user){
//     users.push(user)
// }

// addUser(user1);
// addUser(user2);
// addUser(user3);
// addUser(user4);

// console.log(users);

// function saveUsers(arr){
//     localStorage.setItem('myusers',JSON.stringify(arr))
// }

// saveUsers(users);

// function renderUsers(){
//     const users=JSON.parse(localStorage.getItem('myusers'))
//     tbody.innerHTML='';
//     users.forEach(user => {
//         tbody.innerHTML+=`
//         <tr>
//               <td>${user.fName}</td>
//               <td>${user.lName}</td>
//               <td>${user.adress}</td>
//         </tr>`
//     });
//     console.log('users in localstorage',users)
// }

// renderUsers();



