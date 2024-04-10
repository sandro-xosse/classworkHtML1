const gridElements=Array.from(document.querySelectorAll('.grid-item'))
const Winning_board=document.querySelector('.Winning_board')

const Xwinner=document.querySelector('./image/')
const Owinner='O'

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


console.log(gridElements)

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






