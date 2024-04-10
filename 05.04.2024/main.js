const gridElements=Array.from(document.querySelectorAll('.grid-item'))
const Winning_board=document.querySelector('.Winning_board');


// const X_player=document.querySelector('./tic-tac-design/tic-tac-design/image/Xdark')
// console.log(X_player)
// const O_player='O'

let p=true;






function handClick(array){
    array.forEach(element => {
        element.addEventListener('click',(e)=>{
            changePlayer(element);
            winningLines(gridElements);
        })
        
    });
}

handClick(gridElements);




// changeClass(gridElements)

function changePlayer(el){
    if(!isEmpty(el)) return;    
    if(p) el.innerHTML=`<img src="./tik-tak-desing/tik-tak-desing/images/Xdark.svg" id="x"  alt="">`
    else el.innerHTML=`<img src="./tik-tak-desing/tik-tak-desing/images/Odark.svg" id="o"  alt="">`
    p=!p
}

function isEmpty(element){
      if (Array.from(element.children).length===0)  return true;
      return false;
}


function winningLines(arr){ 
    if (arr[0].children[0]?.id===arr[1].children[0]?.id && arr[1].children[0]?.id===arr[2].children[0]?.id && !!arr[0].children[0]?.id)
     return console.log('winner is aaa')

    if (arr[3].children[0]?.id===arr[4].children[0]?.id && arr[4].children[0]?.id===arr[5].children[0]?.id && !!arr[3].children[0]?.id) 
    return console.log('winner is bbb')

    if (arr[6].children[0]?.id===arr[7].children[0]?.id && arr[7].children[0]?.id===arr[8].children[0]?.id && !!arr[6].children[0]?.id)
    return console.log('winner is ccc')

    if (arr[0].children[0]?.id===arr[3].children[0]?.id && arr[3].children[0]?.id===arr[6].children[0]?.id && !!arr[0].children[0]?.id)
    return console.log('winner is ddd')

    if (arr[1].children[0]?.id===arr[4].children[0]?.id && arr[4].children[0]?.id===arr[7].children[0]?.id && !!arr[1].children[0]?.id)
    return console.log('winner is eee')

    if (arr[2].children[0]?.id===arr[5].children[0]?.id && arr[5].children[0]?.id===arr[8].children[0]?.id && !!arr[2].children[0]?.id)
    return console.log('winner is fff')

    if (arr[0].children[0]?.id===arr[4].children[0]?.id && arr[4].children[0]?.id===arr[8].children[0]?.id && !!arr[0].children[0]?.id)
    return console.log('winner is ggg')

    if (arr[2].children[0]?.id===arr[4].children[0]?.id && arr[4].children[0]?.id===arr[6].children[0]?.id && !!arr[2].children[0]?.id)
    return console.log('winner is hhh')

}


// function PlayerItem(){
//     const Player=gridElements
//     if(Player.innerHTML==='X'){
//         X_playerIcon.classList.add("X_active")
//     }
// }
