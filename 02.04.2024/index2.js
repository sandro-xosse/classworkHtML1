import {getCurrency,getSupported,renderOpsions} from './services.js'
import {HtmlElement} from './domelement.js'

let rate=null;
let currency1='GEL';
let currency2='USD';
let amount_1=1;
let amount_2=null;
let curencies=null
const suportedCodes=await getSupported();

HtmlElement.amount_1.addEventListener('input',(e)=>{
    amount_1=e.target.value
})

HtmlElement.btn.addEventListener('click',(e)=>{
    e.preventDefault()
    amount_2=rate*amount_1;
    HtmlElement.amount_2.value=amount_2;
})

HtmlElement.select_1.addEventListener('change',async (e)=>{
    curencies= await getCurrency(currency1);
    rate=curencies.rates[currency2]; 
})
HtmlElement.select_2.addEventListener('change',(e)=>{
    currency2=e.target.value
    rate=curencies.rates[currency2];
});

HtmlElement.change_icon.addEventListener('click',(e)=>{
    e.preventDefault();
    const changecurr1=currency2;
    currency2=currency1;
    currency1=changecurr1;

    init() 
    
})



async function init(){
    renderOpsions(suportedCodes,currency1,currency2);
    curencies= await getCurrency(currency1);
    rate=curencies.rates[currency2];
    amount_2=rate*amount_1
    HtmlElement.amount_2.value=amount_2;


    currency1=curencies.base_code;
    currency2=HtmlElement.select_2.value;
}

function convert(){}

await init();


HtmlElement.select_1.addEventListener('change',async (e)=>{
    const code=e.target.value;
    const data=await getCurrency(code);
    const currency2=HtmlElement.select_2.value;
    currency1=data.base_code;
    rate=data.rates[currency2];
    // code1=curencies.base_code;
    // code2=HtmlElement.select_2.value;
    // rate=curencies.rates[code2];
    // HtmlElement.amount_2.value=rate*1
});




// let a=200;
// let b=100;

// function test(a,b){
//     if(b<a){
//         throw new RangeError('eror4444')
//     }
//     console.log(b-a)
    
// }


// try{
//     test(a,b)
    
// }catch{
//     console.log('this is catch block')
// }finally{
//     console.log('this is finally block')

// }