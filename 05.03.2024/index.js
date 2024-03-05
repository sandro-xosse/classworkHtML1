const weight=document.querySelector('#weight');
const height=document.querySelector('#height');
const btn=document.querySelector('.btn');
const resultContainer=document.querySelector('#result')

// BMI=kg/height*height

btn.addEventListener('click',()=>{
    
    const kg=weight.value;
    const meter=height.value/100;
    const BMI=Math.round(kg/meter**2);
    if(kg<=0 || meter<=0) {
        window.alert('you must fill weight and height')
        return
}
    


    if(BMI<19){
        resultContainer.innerHTML=(`your BMI is ${BMI} and you are thin`)
         resultContainer.style='color: blue'
    }
    else if(BMI>=19 && BMI<25){
        resultContainer.innerHTML=(`your BMI is ${BMI} and you are normal`)
         resultContainer.style='color: yellow'
    }
    else if(BMI>=25 && BMI<=29){
        resultContainer.innerHTML=(`your BMI is ${BMI} and you are fat`)
         resultContainer.style='color: red'
    }
    else if(BMI>29){
        resultContainer.innerHTML=(`your BMI is ${BMI} and you are very fat`)
          resultContainer.style='color: darkred'
    }

})

