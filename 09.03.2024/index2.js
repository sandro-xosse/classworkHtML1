// const Fname="beqa"
// const Vavname='sandro'

// localStorage.setItem('myLname',Vavname)
// localStorage.removeItem('myLname')

// localStorage.setItem('myname',Fname)




const form=document.querySelector('form');
const tBody=document.querySelector('tbody');
renderUsers(getUsers());



form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let formData=new FormData(form);

    const user=Object.fromEntries(formData);

    user.id=idGenerator();

    const users=getUsers();

    users.push(user);
      
    saveUser(user);

    renderUsers(users);

    form.reset();

});



function idGenerator(){
    return Math.random().toFixed(4).slice(2);
}



function renderUsers(arr){
    tBody.innerHTML='';
    arr.forEach(user => {
        tBody.innerHTML+=`<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.lastname}</td>
        <td>${user.email}</td>
        <td>${user.address}</td>
        <td>${user.phone}</td>
        <td>
          <img class="image" src="./images/edit-icon-png-14.png" alt="">
          <img class="image" src="./images/delete-icon-png-19.jpg" alt="">
        </td>
      </tr>
        `

        document.querySelector('#delete').addEventListener('click',()=>{
            console.log(user.id)
            deleteUser(user.id);
            renderUsers(getUsers());
        })
    });
}





function saveUser(user){
    const users=getUsers();
    let index=users.findIndex(el=>el.id===user.id);
    
    index>=0?users[index]=user:users.push(user)

    localStorage.setItem('users',JSON.stringify(users))
}





function deleteUser(id){
    const users=getUsers();
    let index=users.findIndex(el=>el.id===id)
    
   if(index===-1) return
   users.splice(index,1);
   

    localStorage.setItem('users',JSON.stringify(users))
}




function getUsers(){
    return JSON.parse(localStorage.getItem('users'))??[];
}

