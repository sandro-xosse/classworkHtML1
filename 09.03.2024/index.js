const btnAdd=document.querySelector('.btn-add');
const form=document.querySelector('form');
const list=document.querySelector('.to-do-list');
const edit=document.querySelector('.btn-edit');
const select=document.querySelector('select');
let myToDos=[];
let editJobId='';
let jobisActive=null;

select.addEventListener('change',(e)=>{
    jobisActive=e.target.value
})

btnAdd.addEventListener('click',(e)=>{
    e.preventDefault();
    const value=input.value.trim();
    if(value=='') return;
    editJobId?addNew(value,editJobId,jobisActive):addNew(value);
    
})