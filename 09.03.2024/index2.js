const form=document.querySelector('form');
const tBody=document.querySelector('tbody');
let UserId=''

renderUsers(getUsers());

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let formData=new FormData(form);
    const user=Object.fromEntries(formData);
    user.id=idGenerator();
    const users=getUsers();      
    saveUser(user);
    renderUsers(getUsers());
    form.reset();
});

function idGenerator(){
    return Math.random().toFixed(4).slice(2);
}


function saveUser(user){
    const users=getUsers();
    let index=users.findIndex((el)=>{return el.id===user.id});    
    index>=0?users[index]=user:users.push(user);
    localStorage.setItem('users',JSON.stringify(users));
}

function deleteUser(id){
    const users=getUsers();
    let index=users.findIndex(el=>el.id===id);    
    if(index===-1) return;
    users.splice(index,1);
    localStorage.setItem('users',JSON.stringify(users));
    renderUsers(getUsers())
}


function editUser(id){
    const users=getUsers();
    let index=users.findIndex(el=>el.id===id);
    if(index===-1) return;
    UserId=users[index].id;
    const user=users[index];
    Array.from(form.children).forEach((el)=>{
        let inputName=el.name;
        if(Object.keys(user).includes(inputName)){
            el.value=user[inputName];
        }
    })
}


function getUsers(){
    return JSON.parse(localStorage.getItem('users')) ?? [];
}


function setDeleteLisener(){
    const deleteBtns=Array.from(document.querySelectorAll('.delete'));
    deleteBtns.forEach(el=>{
       el.addEventListener('click',(e)=>{
          const userId=e.target.attributes.userId.value;
          deleteUser(userId);   
       })
    })
 }


 function setEditLisener(){
    const editBtns=Array.from(document.querySelectorAll('.edit'));
    editBtns.forEach(el=>{
       el.addEventListener('click',(e)=>{
          const userId=e.target.attributes.userId.value;
          editUser(userId);   
       })
    })
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
          <img userId=${user.id}  class="edit" width='20px' height='20px'  src="./images/edit-icon-png-14.png" alt="">
          <img userId=${user.id}  class="delete" width='20px' height='20px' src="./images/delete-icon-png-19.jpg" alt="">
        </td>
      </tr>
        `
        setDeleteLisener();
        setEditLisener();
    });
}


function getUsers(){
    return JSON.parse(localStorage.getItem('users'))??[];
}

