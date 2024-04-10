const myName=document.querySelector(".name");
const myButton=document.querySelector(".btn");

// function changeName(){
//     myName.innerHTML = "Nika"
// }

function changeName(){
    myName.innerHTML = "Temur"
}


myButton.addEventListener("click",()=>{
    myName.style.color="red"
})
