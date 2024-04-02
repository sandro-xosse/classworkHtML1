import {getCurrency,getSupported,renderOpsions} from './services.js'
import {HtmlElement} from './domelement.js'

let rate=0;
let code1='';
let code2='';


async function init(){
    const suportedCodes=await getSupported();
    renderOpsions(suportedCodes);
    const curencies= await getCurrency("GEL");
    code1=curencies.base_code;
    code2=HtmlElement.select_2.value;
    rate=curencies.rates[code2];
    HtmlElement.amount_2.value=rate*1
}

function covert(){}

init()


HtmlElement.select_1.addEventListener('change',async (e)=>{
    const code=e.target.value;
    const data=await getCurrency(code);
    const code2=HtmlElement.select_2.value;
    // code1=curencies.base_code;
    // code2=HtmlElement.select_2.value;
    // rate=curencies.rates[code2];
    // HtmlElement.amount_2.value=rate*1
});




