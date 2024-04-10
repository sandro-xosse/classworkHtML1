const numbers=[5,20,10,40,50,60,70]

function main(numbers,target){
    let number1;
    let number2;
    let initArray=[...numbers]

    function getIndex(numbers,target){
     if(!numbers.length===0) return 'numbers not found';
     number1=numbers[0];
     for(let i=0; i<numbers.length; i++){
        number2=numbers[i]
        if(number1+number2===target){
            return [initArray.indexOf(number1),initArray.indexOf(number2)]
        }
    }
    numbers.shift()
    return getIndex(numbers,target)
}
return getIndex(numbers,target)
}

console.log(main(numbers,60))
