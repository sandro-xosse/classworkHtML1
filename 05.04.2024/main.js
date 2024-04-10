const gridElements=Array.from(document.querySelectorAll('.grid-item'))
const Winning_board=document.querySelector('.Winning_board');
const X_playerIcon=document.querySelector('.X_icon')
const O_playerIcon=document.querySelector('.O_icon')

// const X_player=document.querySelector('./tic-tac-design/tic-tac-design/image/Xdark')
// console.log(X_player)
// const O_player='O'

let p=true;






function handClick(array){
    array.forEach(element => {
        element.addEventListener('click',(e)=>{
            changePlayer(element);
            winningLines(gridElements);
            PlayerItem(gridElements)
        })
        
    });
}

handClick(gridElements);


function changePlayer(el){
    if(!isEmpty(el)) return;    
    if(p) el.innerHTML='X'
    else el.innerHTML='0'
    p=!p
}

function isEmpty(element){
      if (!element.innerText)  return true;
      return false;
}


function winningLines(arr){ 
    if (arr[0].innerText===arr[1].innerText && arr[1].innerText===arr[2].innerText&&!!arr[0].innerText)
    console.log('winner is aaa')

    if (arr[3].innerText===arr[4].innerText && arr[4].innerText===arr[5].innerText &&!!arr[3].innerText) 
    return console.log('winner is bbb')

    if (arr[6].innerText===arr[7].innerText && arr[7].innerText===arr[8].innerText &&!!arr[6].innerText)
    return console.log('winner is ccc')

    if (arr[0].innerText===arr[3].innerText && arr[3].innerText===arr[6].innerText &&!!arr[0].innerText)
    return console.log('winner is ddd')

    if (arr[1].innerText===arr[4].innerText && arr[4].innerText===arr[7].innerText &&!!arr[1].innerText)
    return console.log('winner is eee')

    if (arr[2].innerText===arr[5].innerText && arr[5].innerText===arr[8].innerText &&!!arr[2].innerText)
    return console.log('winner is fff')

    if (arr[0].innerText===arr[4].innerText && arr[4].innerText===arr[8].innerText &&!!arr[0].innerText)
    return console.log('winner is ggg')

    if (arr[2].innerText===arr[4].innerText && arr[4].innerText===arr[6].innerText &&!!arr[2].innerText)
    return console.log('winner is hhh')



}


function PlayerItem(){
    const Player=gridElements
    if(Player.innerHTML==='X'){
        X_playerIcon.classList.add("X_active")
    }
    console.log(gridElements)
}



PlayerItem(gridElements)